from http.client import responses
import os
import resend
from dotenv import load_dotenv

resend.api_key = os.getenv("RESEND_API_KEY")

def send_otp_email(email: str , otp: str):
    responses = resend.Emails.send(
        {
             "from": "Torpor <noreply@project-torpor.in>",
        "to": [email],
        "subject": "Your Torpor verification code",
        "html": f"""
            <h2>Verify your Torpor email</h2>

            <p>Your verification code is:</p>

            <h1>{otp}</h1>

            <p>This code will expire in 5 minutes.</p>

            <p>If you did not request this code,
            you can ignore this email.</p>

            <p>— Project Torpor Team</p>
        """
        }
    )
    return responses