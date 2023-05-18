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
  ElementChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
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

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Company 1",
      data: labels.map((item) => item.length * 100),
      borderColor: "rgb(7, 200, 120)",
      backgroundColor: "rgba(10, 170, 74, 0.5)",
    },
  ],
};
const SentimentChart = () => {
  return (
    <Row justify={"center"}>
      <Col span={24}>
        <Line data={data} options={options} />
      </Col>
    </Row>
  );
};

export default SentimentChart;
