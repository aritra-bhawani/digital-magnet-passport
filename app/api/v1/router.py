from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.passport import Passport
from app.schemas.passport import PassportCreate, PassportUpdate, PassportOut

router = APIRouter()

@router.get("/health")
def health_check():
    return {"status": "ok"}


@router.post("/passport", response_model=PassportOut)
def create_passport(data: PassportCreate, db: Session = Depends(get_db)):
    passport = Passport(**data.model_dump())
    db.add(passport)
    db.commit()
    db.refresh(passport)
    return passport

@router.get("/passport/all", response_model=list[PassportOut])
def list_passports(db: Session = Depends(get_db)):
    return db.query(Passport).all()

@router.get("/passport/{id}", response_model=PassportOut)
def get_passport(id: int, db: Session = Depends(get_db)):
    return db.query(Passport).filter(Passport.id == id).first()

@router.put("/passport/{id}", response_model=PassportOut)
def update_passport(id: int, data: PassportUpdate, db: Session = Depends(get_db)):
    passport = db.query(Passport).filter(Passport.id == id).first()
    for key, value in data.model_dump(exclude_unset=True).items():
        setattr(passport, key, value)
    db.commit()
    db.refresh(passport)
    return passport
