import strawberry
from typing import Any, Dict, List


@strawberry.type
class TwitterPost:
    query: str
    content: str
    author: str
    date: str
    source: str
    likes: str


@strawberry.input
class TwitterPostInference:
    query: str
    content: str
    author: str
    date: str
    source: str
    likes: str
    label: int
    score: float


def from_query_to_twitter_posts(
    queried_post: List[Dict[str, Any]]
) -> List[TwitterPost]:
    twitter_posts = []
    for post in queried_post:
        twitter_posts.append(
            TwitterPost(
                query=post["query"],
                content=post["content"],
                author=post["author"],
                date=post["date"],
                source=post["source"],
                likes=post["likes"],
            )
        )

    return twitter_posts
