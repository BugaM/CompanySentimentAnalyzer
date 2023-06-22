from backend.db import get_db

db_session = get_db()

QUERY_LIMIT = 5


def test_post_likes():
    post_likes = 5
    twitter_posts_collection = db_session.get_collection("TwitterPosts")

    query = {}
    query["likes"] = post_likes
    queried_posts = twitter_posts_collection.find(query).limit(QUERY_LIMIT)

    assert len(list(queried_posts)) <= QUERY_LIMIT

    for post in queried_posts:
        assert post["likes"] == post_likes


def test_post_query():
    post_query = "ifood"
    twitter_posts_collection = db_session.get_collection("TwitterPosts")

    query = {}
    query["query"] = post_query
    queried_posts = twitter_posts_collection.find(query).limit(QUERY_LIMIT)

    assert len(list(queried_posts)) <= QUERY_LIMIT

    for post in queried_posts:
        assert post["query"] == post_query


def test_post_author():
    post_author = "emedemilobitch"
    twitter_posts_collection = db_session.get_collection("TwitterPosts")

    query = {}
    query["author"] = post_author
    queried_posts = twitter_posts_collection.find(query).limit(QUERY_LIMIT)

    assert len(list(queried_posts)) <= QUERY_LIMIT

    for post in queried_posts:
        assert post["author"] == post_author
