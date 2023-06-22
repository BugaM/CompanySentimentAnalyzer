def test_scrape_number():
    from scraper.twitter_scraper import TwitterScraper
    from datetime import datetime

    start_date = datetime.fromisoformat("2022-05-05")
    end_date = datetime.fromisoformat("2022-05-15")

    scraper = TwitterScraper(500)
    tweets = scraper.timed_search("ifood", start_date, end_date)

    assert len(tweets) == 501


def test_starting_date():
    from scraper.twitter_scraper import TwitterScraper
    from datetime import datetime

    start_date = datetime.fromisoformat("2022-05-05")
    last_date = datetime.fromisoformat("2022-05-14")
    end_date = datetime.fromisoformat("2022-05-15")

    scraper = TwitterScraper(50)
    tweets = scraper.timed_search("ifood", start_date, end_date)

    first_tweet = tweets[0]

    assert first_tweet.date.day == last_date.day
    assert first_tweet.date.month == last_date.month
    assert first_tweet.date.year == last_date.year
