from abc import ABC, abstractmethod
from datetime import datetime
import dataclasses

#######################################################################################################################
# Auxiliary Data Class -----------------------------------------------------------------------------------------------#
#######################################################################################################################

@dataclasses.dataclass
class NetworkUser:
    username: str
    id: str
    display_name: str
    join_date: datetime
    total_posts: int

@dataclasses.dataclass
class NetworkPost:
    content: str
    author: NetworkUser
    date: datetime
    source: str
    likes: int

#######################################################################################################################
# Abstract Scraper Class ---------------------------------------------------------------------------------------------#
#######################################################################################################################

class AbstractScraper(ABC):
    """
    Abstract class representing a webscraper.
    """

    def __init__(self):
        pass

    @abstractmethod
    def get_user(self, username):
        """
        Gets information about a certain user.

        :param username: User's handle in the website.
        :type username: str
        :rtype: NetworkUser
        """
        pass

    @abstractmethod
    def get_user_posts(self, user_id):
        """
        Gets information about a certain user.

        :param username: User's handle in the website.
        :type username: str
        :rtype: List of NetworkPost
        """
        pass

    @abstractmethod
    def search_query(self, query):
        """
        Searches the website for a certain query.

        :param query: Query to be searched.
        :type query: str
        :rtype: List of NetworkPost
        """
        pass

    @abstractmethod
    def timed_search(self, query, start_date, end_date):
        """
        Searches the website for a certain query, in the specific time interval.

        :param query: Query to be searched.
        :type query: str
        :param start_date: Starting date for search.
        :type start_date: datetime
        :param end_date: Ending date for search.
        :type end_date: datetime
        :rtype: List of NetworkPost
        """
        pass    

    # @abstractmethod
    # def set_end_date(self, end_date):
    #     """
    #     Sets the end date for the scraper.

    #     :param end_date: Date that the scraper should stop at. Should be ISO format.
    #     :type end_date: str
    #     """
    #     pass

    # @abstractmethod
    # def set_query(self, search_query):
    #     """
    #     Sets the query that will be used when scraping for data.

    #     :param end_date: Search query.
    #     :type end_date: str
    #     """
    #     pass

    # @abstractmethod
    # def get_results(self):
    #     pass
