from datetime import datetime
from typing import List, Optional

import strawberry
from fastapi import Depends
from strawberry.fastapi import GraphQLRouter
from strawberry.types import Info

from backend.db import get_db
from backend.models.twitter import (
    TwitterPost,
    TwitterPostInference,
    TwitterPostInferenceInput,
    from_query_to_twitter_post_inferences,
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
        end_date: Optional[datetime] = datetime.today(),
        start_date: Optional[datetime] = None,
        limit: int = 1000,
    ) -> List[TwitterPost]:
        db_session = info.context["db_session"]
        twitter_posts_collection = db_session.get_collection("TwitterPosts")

        query = {}
        if start_date != None:
            query["date"] = {"$lt": end_date, "$gte": start_date}
        else:
            query["date"] = {"$lt": end_date}
        queried_posts = twitter_posts_collection.find(query).limit(limit)

        return from_query_to_twitter_posts(queried_posts)

    @strawberry.field
    def twitter_post_inferences(
        self,
        info: Info,
        end_date: Optional[datetime] = datetime.today(),
        start_date: Optional[datetime] = None,
        limit: int = 10000,
    ) -> List[TwitterPostInference]:
        db_session = info.context["db_session"]
        twitter_post_inferences_collection = db_session.get_collection(
            "TwitterPostInferences"
        )

        query = {}
        if start_date != None:
            query["date"] = {"$lt": end_date, "$gte": start_date}
        else:
            query["date"] = {"$lt": end_date}
        queried_posts = twitter_post_inferences_collection.find(query).limit(limit)

        return from_query_to_twitter_post_inferences(queried_posts)


@strawberry.type
class Mutation:
    @strawberry.mutation
    def add_twitter_post_inferences(
        self, info: Info, twitter_post_inferences: List[TwitterPostInferenceInput]
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
