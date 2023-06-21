from typing import List

import strawberry
from fastapi import Depends
from strawberry.fastapi import GraphQLRouter
from strawberry.types import Info

from backend.db import get_db
from backend.models.twitter import (
    TwitterPost,
    TwitterPostInference,
    from_query_to_twitter_posts,
)


async def get_context(db_session=Depends(get_db)):
    return {
        "db_session": db_session,
    }


@strawberry.type
class Query:
    @strawberry.field
    def twitter_posts(
        self,
        info: Info,
        author: str,
    ) -> List[TwitterPost]:
        db_session = info.context["db_session"]
        twitter_posts_collection = db_session.get_collection("TwitterPosts")

        query = {}
        query["author"] = author
        queried_posts = twitter_posts_collection.find(query)

        return from_query_to_twitter_posts(queried_posts)


@strawberry.type
class Mutation:
    @strawberry.mutation
    def add_twitter_post_inferences(
        self, info: Info, twitter_post_inferences: List[TwitterPostInference]
    ) -> None:
        db_session = info.context["db_session"]
        twitter_post_inferences_collection = db_session.get_collection(
            "TwitterPostInferences"
        )

        queries = []
        for post in twitter_post_inferences:
            queries.append(
                {
                    "query": post.query,
                    "content": post.content,
                    "author": post.author,
                    "date": post.date,
                    "source": post.source,
                    "likes": post.likes,
                    "label": post.label,
                    "score": post.score,
                }
            )

        twitter_post_inferences_collection.insert_many(queries)


schema = strawberry.Schema(
    query=Query,
    mutation=Mutation,
)

router = GraphQLRouter(
    schema,
    context_getter=get_context,
)
