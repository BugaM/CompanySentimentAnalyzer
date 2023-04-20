import os
from functools import lru_cache
from typing import Tuple


@lru_cache
def get_db_credentials() -> Tuple[str, str]:
    username = os.environ.get("DB_USERNAME")
    password = os.environ.get("DB_PASSWORD")

    return (username, password)