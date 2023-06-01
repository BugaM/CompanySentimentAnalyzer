import pandas as pd
from tqdm import tqdm


from google_play_scraper import Sort, reviews, app

APP_IDS = [
    "br.com.brainweb.ifood",
    "com.cerveceriamodelo.modelonow",
    "com.mcdo.mcdonalds",
    "habibs.alphacode.com.br",
    "com.xiaojukeji.didi.brazil.customer",
    "com.ubercab.eats",
    "com.grability.rappi",
    "burgerking.com.br.appandroid",
    "com.vanuatu.aiqfome",
]


def get_reviews():
    app_infos = []

    for ap in tqdm(APP_IDS):
        info = app(ap, lang="en", country="us")
        del info["comments"]
        app_infos.append(info)

    app_reviews = []

    for ap in tqdm(APP_IDS):
        for score in list(range(1, 6)):
            for sort_order in [Sort.MOST_RELEVANT, Sort.NEWEST]:
                rvs, _ = reviews(
                    ap,
                    lang="pt",
                    country="br",
                    sort=sort_order,
                    count=200 if score == 3 else 100,
                    filter_score_with=score,
                )
                for r in rvs:
                    r["sortOrder"] = (
                        "most_relevant"
                        if sort_order == Sort.MOST_RELEVANT
                        else "newest"
                    )
                    r["appId"] = ap
                app_reviews.extend(rvs)

    app_reviews_df = pd.DataFrame(app_reviews)
    return app_reviews_df


def app_reviews_to_json(df):
    df.to_json("models/app_reviews/reviews.json")


if __name__ == "__main__":
    app_reviews = get_reviews()
    app_reviews_to_json(app_reviews)
