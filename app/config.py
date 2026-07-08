from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")

    app_name: str = "Digital Magnet Passport"
    debug: bool = False
    api_v1_prefix: str = "/api/v1"

    database_url: str = "mysql+pymysql://user:password@localhost:3306/digital_magnet"


settings = Settings()
