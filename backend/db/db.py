from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

from credentials import get_db_credentials


class DBSession:
    def __init__(self):
        db_username, db_password = get_db_credentials()
        uri = f"mongodb+srv://{db_username}:{db_password}@sentzer.4b2fczb.mongodb.net/?retryWrites=true&w=majority"
        try:
            self._client = MongoClient(uri, server_api=ServerApi("1"))
            self._client.admin.command("ping")
        except:
            raise Exception("Could not connect to database.")

    def get_database(self):
        return self._client["Sentzer"]

    def get_collection(self, collection_name: str):
        database = self.get_database()
        return database[collection_name]
