from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    app_name: str = "Digital Magnet Passport"
    debug: bool = False
    api_v1_prefix: str = "/api/v1"
    database_url: str = "mysql+pymysql://user:password@localhost:3306/digital_magnet"

    class Config:
        env_file = ".env"

settings = Settings()
