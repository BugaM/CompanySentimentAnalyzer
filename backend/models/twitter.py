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


def from_query_to_twitter_post_inferences(
    queried_post: List[Dict[str, Any]]
) -> List[TwitterPostInference]:
    twitter_post_inferences = []
    for post in queried_post:
        twitter_post_inferences.append(
            TwitterPostInference(twitter_post=post["twitter_post"], score=post["score"])
        )

    return twitter_post_inferences
