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
from fastapi.middleware.cors import CORSMiddleware
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://project-torpor.in",
        "https://www.project-torpor.in",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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

    logger.info(f"Generated new OTP for {data.email} (ID: {verification.id}) expires at {verification.expires_at}")

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
        .order_by(email_verification.id.desc())
        .first()
    )

    if not verification:
        logger.info(f"Verify OTP failed: No active verification found for {data.email}")
        return{
            "verified": False,
            "message": "No active verification found"
        }

    current_time = datetime.now(timezone.utc)
    logger.info(f"Verifying OTP ID {verification.id} for {data.email}. Created: {verification.created_at}, Expires: {verification.expires_at}, Current UTC: {current_time}")

    if verification.expires_at < current_time:
        logger.info(f"OTP ID {verification.id} expired.")
        return{
            "verified" : False,
            "message" : "OTP has Expired"
        }

    if verification.attempts >= 5:
        logger.info(f"OTP ID {verification.id} blocked due to too many incorrect attempts.")
        return{
            "verified" : False,
            "message" : "Too many incorrect attempts"
        }

    if not verify_otp(data.otp , verification.otp_hashed):
        verification.attempts += 1
        db.commit()

        return{
            "verified" : False,
            "message" : "Incorrect OTP"
        }

    verification.verified = True
    db.commit()

    return{
        "verified" : True,
        "message" : "OTP verified successfully"
    }