from AbstractScraper import AbstractScraper, NetworkUser, NetworkPost
import snscrape.modules.twitter as sntwitter

#######################################################################################################################
# Twitter Scraper Class ----------------------------------------------------------------------------------------------#
#######################################################################################################################

class TwitterScraper(AbstractScraper):
    def __init__(self):
        super().__init__()
    
    def parse_user(self, user: sntwitter.User):
        return NetworkUser(
            username=user.username,
            id=user.id,
            display_name=user.displayname,
            join_date=user.created,
            total_posts=user.statusesCount
        )

    def get_user(self, username: str) -> NetworkUser:
        scraper_user = sntwitter.TwitterUserScraper(username)._get_entity()
        return self.parse_user(scraper_user)
    
    def get_user_posts(self, username: str):
        pass

    def search_query(self, query: str):
        tweets = []

        scraper_search = sntwitter.TwitterSearchScraper(query).get_items()
        
        for i, tweet in enumerate(scraper_search):
            tweets.append(NetworkPost(
                content=tweet.rawContent,
                author=self.parse_user(tweet.user),
                date=tweet.date,
                source=tweet.source.split(' ')[-1][0:-4],           # This leaves only the platform used. e.g. Android
                likes=tweet.likeCount
            ))
        
        return tweets
