from typing import List, Optional

import strawberry
from db.db import DBSession
from fastapi import FastAPI
from strawberry.fastapi import GraphQLRouter

from backend.models.twitter import TwitterPost, from_query_to_twitter_posts


@strawberry.type
class Query:
    @strawberry.field
    def twitter_posts(
        self,
        author: Optional[str] = strawberry.UNSET,
    ) -> List[TwitterPost]:
        session = DBSession()
        twitter_posts_collection = session.get_collection("TwitterPosts")
        query = {}
        if author:
            query["author"] = author

        if query:
            queried_posts = twitter_posts_collection.find(query)
        else:
            queried_posts = twitter_posts_collection.find()

        return from_query_to_twitter_posts(queried_posts)


schema = strawberry.Schema(Query)

graphql_app = GraphQLRouter(schema)

app = FastAPI()
app.include_router(graphql_app, prefix="/graphql")
