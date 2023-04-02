import { Col, Row } from "antd";
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
import { Line } from "react-chartjs-2";

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
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Sentiment Analyzer",
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
    {
      label: "Company 2",
      data: labels.map((item) => item.length ** 3 + 150),
      borderColor: "rgb(4, 84, 57)",
      backgroundColor: "rgba(1, 92, 66, 0.5)",
    },
  ],
};
const Analysis = () => {
  return (
    <Row justify={"center"}>
      <Col span={20}>
        <Line data={data} options={options} />
      </Col>
    </Row>
  );
};

export default Analysis;
