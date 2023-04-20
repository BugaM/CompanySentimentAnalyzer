# General Imports
import sys
import argparse
import pandas as pd
from datetime import datetime

# Sentzer implementations
sys.path.append("../backend/db")
from twitter_scraper import TwitterScraper
from db import DBSession

#######################################################################################################################
# Parser Implementation ----------------------------------------------------------------------------------------------#
#######################################################################################################################
# Define the parser.
parser = argparse.ArgumentParser(
    prog="SentzerScraper",
    description="A webscraper built for collecting data for Sentzer. By default, it will search Twitter, but it can be\
                 toggled to search through Reddit using a flag.",
)

# Define parser arguments and their descriptions.
parser.add_argument("-q", type=str, nargs="+", help="Search query.")
parser.add_argument("-c", type=int, help="Scraped posts cap.")
parser.add_argument(
    "-ds",
    type=str,
    help="Starting date for query search.  Should be in YYYY-DD-MM format.",
)
parser.add_argument(
    "-de",
    type=str,
    help="Ending date for query search.  Should be in YYYY-DD-MM format.",
)
parser.add_argument("-u", type=str, nargs="+", help="Username to be searched.")
parser.add_argument("-f", type=str, help="File to save the scraped data to.")
parser.add_argument(
    "-s",
    action="store_const",
    const=True,
    help="Toggle flag for sending data to the database.",
)
parser.add_argument(
    "-r", action="store_const", const=True, help="Toggle flag for searching Reddit."
)

# Get the arguments.
args = parser.parse_args()


#######################################################################################################################
# Arguments Assertion ------------------------------------------------------------------------------------------------#
#######################################################################################################################
if args.q is None:
    raise AssertionError("Search query was not provided !")

if args.c is None:
    raise AssertionError("Post cap was not provided !")

if (args.f is None) and (args.s is None):
    raise AssertionError(
        "File to save data not specified, and sending it to the database was not enabled !"
    )

if (args.de is not None) and (args.ds is None):
    raise AssertionError(
        "Ending date for interval was provided, but starting date was not !"
    )


#######################################################################################################################
# Arguments Manipulation ---------------------------------------------------------------------------------------------#
#######################################################################################################################
# Join the list of strings
args.q = " ".join(args.q)

# Convert the dates into a Datetime object.
if args.ds is not None:
    args.ds = datetime.fromisoformat(args.ds)

if args.de is not None:
    args.de = datetime.fromisoformat(args.de)

if args.f is not None:
    args.f = args.f + ".json"

#######################################################################################################################
# Scraper Call -------------------------------------------------------------------------------------------------------#
#######################################################################################################################
# Initialize the default Twitter scraper.
twitter_scraper = TwitterScraper(args.c)

# Check if the Reddit scraper is called.
if args.r:
    raise NotImplementedError("Reddit scraper has not been implemented yet !")

# Do timed search if interval is provided.
if (args.ds is not None) and (args.de is not None):
    tweets = twitter_scraper.timed_search(args.q, start_date=args.ds, end_date=args.de)
elif args.ds is not None:
    tweets = twitter_scraper.timed_search(args.q, start_date=args.ds)


#######################################################################################################################
# Data Processing  ---------------------------------------------------------------------------------------------------#
#######################################################################################################################
# Create a dataframe to store all the posts.
posts = []
for entry in tweets:
    posts.append(
        {
            "query": args.q,
            "content": entry.content,
            "author": entry.author.username,
            "date": entry.date.strftime("%Y-%d-%m"),
            "source": entry.source,
            "likes": entry.likes,
        }
    )

posts = pd.DataFrame.from_dict(posts, orient="columns")

# If the flag for saving data to a file is active, dump the data.
if args.f is not None:
    print("Dumping data into " + args.f)
    posts.to_json(args.f, orient="records")

# If the flag for sending data to the database is active, send the data.
if args.s:
    db_session = DBSession()
    data_collection = db_session.get_collection("TwitterPosts").insert_many(
        posts.to_dict("records")
    )
