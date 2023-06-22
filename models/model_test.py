import pandas as pd
import evaluate
from transformers import pipeline, AutoTokenizer

MODEL_PATH = "models/trainer/model_sentzer_app"
MINIMAL_ALL = 0.75

model_checkpoint = "neuralmind/bert-base-portuguese-cased"
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)
model = pipeline("sentiment-analysis", model=MODEL_PATH, tokenizer=tokenizer)


def get_sample():
    df = pd.read_csv("models/sentzer_labels_v1.csv")
    return df.sample(n=100, random_state=50)  # seed for reproducibility


def convert(model_outputs):
    results = []
    for output in model_outputs:
        if output["label"] == "negative":
            results.append(0)
        elif output["label"] == "neutral":
            results.append(1)
        else:
            results.append(2)
    return results


sample = get_sample()
content = list(sample["content"])
labels = list(sample["sentiment"])

model_outputs = model(content)
predicted = convert(model_outputs)


def test_minimal_accuracy():
    load_accuracy = evaluate.load("accuracy")
    accuracy = load_accuracy.compute(predictions=predicted, references=labels)[
        "accuracy"
    ]
    print(f"accuracy: {accuracy}")
    assert accuracy >= MINIMAL_ALL


def test_minimal_recall():
    load_recall = evaluate.load("recall")
    recall = load_recall.compute(
        predictions=predicted, references=labels, average="macro"
    )["recall"]
    print(f"recall: {recall}")
    assert recall >= MINIMAL_ALL


def test_minimal_f1():
    load_f1 = evaluate.load("f1")
    f1 = load_f1.compute(predictions=predicted, references=labels, average="macro")[
        "f1"
    ]
    print(f"f1: {f1}")
    assert f1 >= MINIMAL_ALL


def test_minimal_precision():
    load_precision = evaluate.load("precision")
    precision = load_precision.compute(
        predictions=predicted, references=labels, average="macro"
    )["precision"]
    print(f"precision: {precision}")
    assert precision >= MINIMAL_ALL
