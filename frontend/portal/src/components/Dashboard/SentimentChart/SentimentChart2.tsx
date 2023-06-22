import { Col, Row } from "antd";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { DashboardQuery$data } from "@/__generated__/DashboardQuery.graphql";
import { useMemo } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface SentimentChartProps {
  data: DashboardQuery$data;
}

const SentimentChart = ({ data }: SentimentChartProps) => {
  const tweets = useMemo(() => data.twitterPostInferences, [data]);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        suggestedMin: 0,
      },
    },
  };

  let days = useMemo(
    () =>
      tweets.map((tweet) => {
        const parts = tweet.date.split("-");

        const year = parts[0];
        const month = parts[1];
        const day = parts[2].slice(0, 2);

        return `${year}-${month}-${day}`;
      }),
    [tweets]
  );
  days = useMemo(
    () =>
      days
        .filter(function (item, pos) {
          return days.indexOf(item) === pos;
        })
        .sort((a, b) => a.localeCompare(b)),
    [days]
  );

  let tweetSent: number[] = [];
  let tweetCount: number[] = [];

  tweets.forEach((tweet) => {
    const parts = tweet.date.split("-");

    const year = parts[0];
    const month = parts[1];
    const day = parts[2].slice(0, 2);

    const dateString = `${year}-${month}-${day}`;
    const index = days.indexOf(dateString);
    if (tweetCount[index] === undefined) {
      tweetCount[index] = 0;
      tweetSent[index] = 0;
    }
    tweetCount[index] += 1;
    tweetSent[index] += tweet.label;
  });

  const chartData = {
    labels: days,
    datasets: [
      {
        label: tweets[0].query,
        data: tweetSent.map((sent, i) => sent / tweetCount[i]),
        borderColor: "rgb(7, 200, 120)",
        backgroundColor: "rgba(10, 170, 74, 0.5)",
      },
    ],
  };

  return (
    <Row justify={"center"}>
      <Col span={24}>
        <Line data={chartData} options={options} />
      </Col>
    </Row>
  );
};

export default SentimentChart;
