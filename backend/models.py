from sqlalchemy import Boolean, Column, DateTime, Integer, String, Text

from database import Base

class email_verification(Base):
    __tablename__ = "email_verification"

    id = Column(Integer, primary_key = True)
    email = Column(String(255), nullable = False)
    otp_hashed = Column(Text, nullable = False)
    expires_at = Column(DateTime(timezone = True), nullable = False)
    verified = Column(Boolean, default = False)
    attempts = Column(Integer, default = 0)
    created_at = Column(
        DateTime(timezone = True)
    )
