import pandas as pd
from statistics import mean
from transformers import pipeline, AutoTokenizer

MODEL_PATH = "models/trainer/model_sentzer_app"

model_checkpoint = "neuralmind/bert-base-portuguese-cased"
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)
model = pipeline("sentiment-analysis", model=MODEL_PATH, tokenizer=tokenizer)


def get_positive_sample():
    df = pd.read_csv("models/sentzer_labels_v1.csv")
    df_positive = df[df["sentiment"] == 2]
    df_neutral = df[df["sentiment"] == 1]
    df_negative = df[df["sentiment"] == 0]

    df_sample_positive = pd.concat([df_positive[:95], df_negative[:1], df_neutral[:4]])
    df_sample_negative = pd.concat([df_negative[:95], df_positive[:1], df_neutral[:4]])
    df_sample_neutral = pd.concat([df_neutral[:95], df_negative[:2], df_positive[:3]])

    return df_sample_positive, df_sample_negative, df_sample_neutral


def convert(model_outputs):
    results = []
    for output in model_outputs:
        if output["label"] == "negative":
            results.append(-1)
        elif output["label"] == "neutral":
            results.append(0)
        else:
            results.append(1)
    return results


samples = get_positive_sample()
positive_sample = samples[0]
negative_sample = samples[1]
neutral_sample = samples[2]


pos_content = list(positive_sample["content"])

positive_sample_model_outputs = model(pos_content)
positive_predicted = convert(positive_sample_model_outputs)


neg_content = list(negative_sample["content"])

negative_sample_model_outputs = model(neg_content)
negative_predicted = convert(negative_sample_model_outputs)


neutral_content = list(neutral_sample["content"])

neutral_sample_model_outputs = model(neutral_content)
neutral_predicted = convert(neutral_sample_model_outputs)


def test_positive():
    metric = mean(positive_predicted)
    print(f"sentiment metric for positive sample: {metric}")
    assert metric >= 0.45


def test_negative():
    metric = mean(negative_predicted)
    print(f"sentiment metric for negative sample: {metric}")
    assert metric <= -0.45


def test_neutral():
    metric = mean(neutral_predicted)
    print(f"sentiment metric for neutral sample: {metric}")
    assert abs(metric) <= 0.15
