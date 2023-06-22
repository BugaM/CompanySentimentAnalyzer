from fastapi import FastAPI

from backend.api.graphql_schema import router as graphql_router


def create_app() -> FastAPI:
    app = FastAPI()
    app.include_router(graphql_router, prefix="/graphql")

    return app
