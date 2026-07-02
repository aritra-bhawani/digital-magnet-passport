from fastapi import FastAPI

from app.api.v1.router import router as v1_router
from app.config import settings

app = FastAPI(
    title=settings.app_name,
    debug=settings.debug,
)

app.include_router(v1_router, prefix=settings.api_v1_prefix)


@app.get("/")
async def root():
    return {"message": "Welcome to Digital Magnet Passport API"}
