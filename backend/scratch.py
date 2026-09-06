import os
from dotenv import load_dotenv
load_dotenv('.env')
from sqlalchemy import create_engine, text

engine = create_engine(os.getenv('DATABASE_URL'))
with engine.connect() as conn:
    res = conn.execute(text('SELECT id, email, created_at, expires_at FROM email_verification ORDER BY id DESC LIMIT 5;'))
    for row in res:
        print(row)
