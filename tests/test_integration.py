def test_scraper_db_integration():
    import pandas as pd
    from datetime import datetime
    from backend.db import get_db
    from scraper.twitter_scraper import TwitterScraper

    scraper = TwitterScraper(20)
    twitter_posts_collection = get_db().get_collection("TwitterPosts")

    start_date = datetime.fromisoformat("2022-05-05")
    end_date = datetime.fromisoformat("2022-05-15")
    tweets = scraper.timed_search("teste", start_date, end_date)
    
    twitter_posts_collection.delete_many({"query": "teste"})

    posts = []
    for entry in tweets:
        posts.append(
            {
                "query": "teste",
                "content": entry.content,
                "author": entry.author.username,
                "date": entry.date,
                "source": entry.source,
                "likes": entry.likes,
            }
        )

    posts = pd.DataFrame.from_dict(posts, orient="columns")

    prev_num = len(twitter_posts_collection.distinct("query"))
    data_collection = twitter_posts_collection.insert_many(
        posts.to_dict("records")
    )

    assert len(twitter_posts_collection.distinct("query")) == (prev_num + 1)