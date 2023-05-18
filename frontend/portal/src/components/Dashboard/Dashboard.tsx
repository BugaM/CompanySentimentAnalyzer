import { Col, Row, Typography } from "antd";

import TweetCard from "./TweetCard";
import SentimentChart from "./SentimentChart";

const Dashboard = () => {
  return (
    <Col style={{ margin: "16px 32px" }}>
      <Row justify="center">
        <Typography.Title level={3}>Sentiment Dashboard</Typography.Title>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Row justify="center">
            <Typography.Title level={3}>Sentzer Score</Typography.Title>
          </Row>
          <SentimentChart />;
        </Col>
        <Col span={12}>
          <Row justify="center">
            <Typography.Title level={3}>Trending Tweets</Typography.Title>
          </Row>
          <Row>
            <Typography.Title level={4} style={{ marginTop: 8 }}>
              Positive
            </Typography.Title>
          </Row>
          <Row gutter={[8, 8]}>
            <TweetCard />
            <TweetCard />
            <TweetCard />
            <TweetCard />
          </Row>
          <Row>
            <Typography.Title level={4} style={{ marginTop: 8 }}>
              Negative
            </Typography.Title>
          </Row>
          <Row gutter={[8, 8]}>
            <TweetCard />
            <TweetCard />
            <TweetCard />
            <TweetCard />
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default Dashboard;
