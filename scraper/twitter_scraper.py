import dataclasses

import snscrape.modules.twitter as sntwitter


@dataclasses.dataclass
class TwitterUser:
    username: str
    id: str
    display_name: str


class TwitterScraper:
    def get_user(self, username: str) -> TwitterUser:
        scraper_user = sntwitter.TwitterUserScraper(username)._get_entity()
        return TwitterUser(username=username, id=scraper_user.id, display_name=scraper_user.displayname)
