from typing import List, Optional

import strawberry
from fastapi import FastAPI
from strawberry.fastapi import GraphQLRouter

from backend.db import DBSession
from backend.models.twitter import TwitterPost, from_query_to_twitter_posts


@strawberry.type
class Query:
    @strawberry.field
    def twitter_posts(
        self,
        author: str,
    ) -> List[TwitterPost]:
        session = DBSession()
        twitter_posts_collection = session.get_collection("TwitterPosts")

        query = {}
        query["author"] = author
        queried_posts = twitter_posts_collection.find(query)

        return from_query_to_twitter_posts(queried_posts)


def start_server():
    schema = strawberry.Schema(Query)

    graphql_app = GraphQLRouter(schema)

    app = FastAPI()
    app.include_router(graphql_app, prefix="/graphql")


if __name__ == "__main__":
    start_server()
