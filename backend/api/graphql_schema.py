from typing import List, Optional
from datetime import datetime

import strawberry
from fastapi import Depends
from strawberry.fastapi import GraphQLRouter
from strawberry.types import Info

from backend.db import get_db
from backend.models.twitter import TwitterPost, from_query_to_twitter_posts


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
    ) -> List[TwitterPost]:
        db_session = info.context["db_session"]
        twitter_posts_collection = db_session.get_collection("TwitterPosts")

        query = {}
        if start_date != None:
            query["date"] = {'$lt': end_date, '$gte': start_date}
        else:
            query["date"] = {'$lt': end_date}
        queried_posts = twitter_posts_collection.find(query).limit(1000)

        return from_query_to_twitter_posts(queried_posts)


schema = strawberry.Schema(
    query=Query,
)

router = GraphQLRouter(
    schema,
    context_getter=get_context,
)