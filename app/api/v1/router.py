from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.passport import Passport
from app.models.company import Company
from app.models.supply_chain_edge import SupplyChainEdge
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

@router.get("/passport/{id}/provenance")
def get_provenance(id: int, db: Session = Depends(get_db)):
    edges = db.query(SupplyChainEdge).all()

    # build adjacency and find root (no incoming edges)
    targets = {e.target_company for e in edges}
    sources = {e.source_company for e in edges}
    roots = sources - targets
    print(roots)

    # follow the chain from root to end
    path = []
    current = roots.pop() if roots else None
    visited = set()

    while current and current not in visited:
        visited.add(current)
        company = db.query(Company).filter(Company.id == current).first()
        if company:
            path.append(company.name)
        next_edge = next((e for e in edges if e.source_company == current), None)
        current = next_edge.target_company if next_edge else None

    return {"path": path}
