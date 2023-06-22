from transformers import pipeline
import pandas as pd


def convert_label(label):
    if label == "positive":
        return 1
    elif label == "negative":
        return -1
    else:
        return 0


def apply_inference(model: pipeline, df: pd.DataFrame) -> pd.DataFrame:
    content = list(df["content"])
    inference = model(content)
    labels = [i["label"] for i in inference]
    df["label"] = list(map(convert_label, labels))
    df["score"] = [i["score"] for i in inference]
    return df
