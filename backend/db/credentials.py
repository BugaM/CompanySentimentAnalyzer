from functools import lru_cache
from typing import Tuple


@lru_cache
def get_db_credentials() -> Tuple[str, str]:
    username = "sentzer"
    password = "sentzer"

    return (username, password)
