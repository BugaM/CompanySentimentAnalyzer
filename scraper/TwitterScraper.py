from AbstractScraper import AbstractScraper, NetworkUser, NetworkPost

import snscrape.modules.twitter as sntwitter
from datetime import datetime
from typing import List

#######################################################################################################################
# Twitter Scraper Class ----------------------------------------------------------------------------------------------#
#######################################################################################################################


class TwitterScraper(AbstractScraper):
    def __init__(self, tweet_cap):
        super().__init__()
        self.tweet_cap = tweet_cap

    ###################################################################################################################
    # Methods that are specific to this class

    def parse_user(self, user: sntwitter.User):
        return NetworkUser(
            username=user.username,
            id=user.id,
            display_name=user.displayname,
            join_date=user.created,
            total_posts=user.statusesCount,
        )

    ###################################################################################################################
    # Implementation of the abstract methods

    def get_user(self, username: str) -> NetworkUser:
        scraper_user = sntwitter.TwitterUserScraper(username)._get_entity()
        return self.parse_user(scraper_user)

    def get_user_posts(self, username: str) -> List[NetworkPost]:
        user = self.get_user(username)

        query = "(from:" + user.username + ")"
        return self.search_query(query)

    def search_query(self, query: str) -> List[NetworkPost]:
        tweets = []

        scraper_search = sntwitter.TwitterSearchScraper(query).get_items()

        for i, tweet in enumerate(scraper_search):
            # Set a cap on the number of tweets in the list.
            if i > self.tweet_cap:
                break

            tweets.append(
                NetworkPost(
                    content=tweet.rawContent,
                    author=self.parse_user(tweet.user),
                    date=tweet.date,
                    source=tweet.source.split(" ")[-1][
                        0:-4
                    ],  # This leaves only the platform used. e.g. Android
                    likes=tweet.likeCount,
                )
            )

        return tweets

    def timed_search(
        self, search_string: str, start_date: datetime, end_date: datetime
    ) -> List[NetworkPost]:
        # Somebody will get this wrong at some point in time.
        # It may be me.
        if start_date > end_date:
            start = end_date
            end = start_date
        else:
            start = start_date
            end = end_date

        tweets = []

        query = (
            search_string
            + " until:"
            + end.isoformat()[0:10]
            + " since:"
            + start.isoformat()[0:10]
        )
        print("Searching with query:\n" + query)

        scraper_search = sntwitter.TwitterSearchScraper(query).get_items()

        for i, tweet in enumerate(scraper_search):
            # Set a cap on the number of tweets in the list.
            if i > self.tweet_cap:
                break

            tweets.append(
                NetworkPost(
                    content=tweet.rawContent,
                    author=self.parse_user(tweet.user),
                    date=tweet.date,
                    source=tweet.source.split(" ")[-1][
                        0:-4
                    ],  # This leaves only the platform used. e.g. Android
                    likes=tweet.likeCount,
                )
            )

        return tweets
