from pydantic import BaseModel , EmailStr , Field

class SendOTPRequest(BaseModel):
    email : EmailStr

class VerifyOTPRequest(BaseModel):
    email : EmailStr
    otp : str = Field(min_length = 6 , max_length = 6)
