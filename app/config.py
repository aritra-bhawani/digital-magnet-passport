from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    app_name: str = "Digital Magnet Passport"
    debug: bool = False
    api_v1_prefix: str = "/api/v1"
    database_url: str = "mysql+pymysql://user:password@localhost:3306/digital_magnet"
    jwt_secret: str = "mxhyzkjmpqsimxzzbfeumrhksqsctxgh" #random string - we can change in prod
    jwt_algorithm: str = "HS256"
    jwt_expiry_minutes: int = 60

    class Config:
        env_file = ".env"

settings = Settings()
