import secrets  # it's like random librarry but it has use for password like it has hashing and all in built.
from pwdlib import PasswordHash
from datetime import datetime , timezone , timedelta

password_hash = PasswordHash.recommended()

def generate_otp():
    return str(secrets.randbelow(900000) + 100000)

def hash_otp(otp: str):
    return password_hash.hash(otp)


def verify_otp(otp: str, hash_otp: str):
    return password_hash.verify(otp, hash_otp)

def get_expiration_time():
    return datetime.now(timezone.utc) + timedelta(minutes = 5)

# so i add the hashing password so it will add the hashing security to this otp