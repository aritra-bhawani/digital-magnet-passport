from datetime import datetime
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from app.database import Base

class PassportIdentity(Base):
    __tablename__ = "passport_identity"

    id = Column(Integer, primary_key=True, autoincrement=True)
    passport_id = Column(Integer, ForeignKey("passport.id"), nullable=False)
    serial_number = Column(String(100), nullable=False)
    type = Column(String(100), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
