from otp_service import verify_otp
from models import email_verification
from fastapi import Depends , FastAPI
from sqlalchemy.orm import Session
from database import get_db
from pydantic import BaseModel,EmailStr
from schemas import SendOTPRequest , VerifyOTPRequest
from otp_service import generate_otp , hash_otp , get_expiration_time
from email_service import send_otp_email
from datetime import datetime , timezone


app = FastAPI()

class EmailValidator(BaseModel):
    email : EmailStr

@app.get("/")
def home():
    return {"message": "Welcome to Project Torpor Backend"}

@app.post("/auth/send-otp")
def send_otp(
    data: SendOTPRequest,
    db: Session = Depends(get_db)):

    otp = generate_otp()
    hashed_otp = hash_otp(otp)
    expiration_time = get_expiration_time()

    verification = email_verification(
        email = data.email,
        otp_hashed = hashed_otp,
        expires_at = expiration_time
    )


    db.add(verification)
    db.commit()
    db.refresh(verification)

    send_otp_email(data.email, otp)

    return {
        "message": "OTP generated and stored successfully"
    }


@app.post("/auth/verify-otp")
def verify_email(
    data: VerifyOTPRequest,
    db: Session = Depends(get_db)
):
    verification = (
        db.query(email_verification)
        .filter(
            email_verification.email == data.email,
            email_verification.verified == False
        )
        .order_by(email_verification.created_at.desc())
        .first()
    )

    if not verification:
        return{
            "verified": False,
            "messeage": "No active verification found"
        }

    if verification.expires_at < datetime.now(timezone.utc):
        return{
            "verified" : False,
            "messeage" : "OTP has Expired"
        }

    if verification.attempts >= 5:
        return{
            "verified" : False,
            "messeage" : "Too many incorrect attempts"
        }

    if not verify_otp(data.otp , verification.otp_hashed):
        verification.attempts += 1
        db.commit()

        return{
            "verified" : False,
            "messeage" : "Incorrect OTP"
        }

    verification.verified = True
    db.commit()

    return{
        "verified" : True,
        "messeage" : "OTP verified successfully"
    }