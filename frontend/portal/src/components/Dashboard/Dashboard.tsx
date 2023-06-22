import { Col, Row, Typography } from "antd";
import { graphql, useLazyLoadQuery } from "react-relay";

import TweetCard from "./TweetCard";
import TweetCount from "./SentimentChart";
import SentimentChart from "./SentimentChart/SentimentChart2";
import { DashboardQuery } from "@/__generated__/DashboardQuery.graphql";

const Dashboard = () => {
  const data = useLazyLoadQuery<DashboardQuery>(
    graphql`
      query DashboardQuery {
        twitterPostInferences {
          author
          content
          date
          likes
          query
          label
          score
        }
      }
    `,
    {}
  );

  const tweets = [...data.twitterPostInferences];

  const positiveTweets = tweets
    .filter((tweet) => tweet.score > 0.85)
    .sort((a, b) => -Number(a.likes) + Number(b.likes));
  const negativeTweets = tweets
    .filter((tweet) => tweet.label === -1)
    .sort((a, b) => -Number(a.likes) + Number(b.likes))
    .sort((a, b) => +Number(a.score) - Number(b.score));

  return (
    <Col style={{ margin: "16px 32px" }}>
      <Row justify="center">
        <Typography.Title level={3}>Sentiment Dashboard</Typography.Title>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Row justify="center">
            <Typography.Title level={3}>Tweets Over Time</Typography.Title>
          </Row>
          <TweetCount data={data} />;
          <Row justify="center">
            <Typography.Title level={3}>Sentiment Over Time</Typography.Title>
          </Row>
          <SentimentChart data={data} />;
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
            {positiveTweets.slice(0, 4).map((tweet) => (
              <TweetCard
                content={tweet.content}
                author={tweet.author}
                likes={Number(tweet.likes)}
                date={tweet.date}
                key={tweet.author + tweet.date}
              />
            ))}
          </Row>
          <Row>
            <Typography.Title level={4} style={{ marginTop: 8 }}>
              Negative
            </Typography.Title>
          </Row>
          <Row gutter={[8, 8]}>
            {negativeTweets.slice(0, 4).map((tweet) => (
              <TweetCard
                content={tweet.content}
                author={tweet.author}
                likes={Number(tweet.likes)}
                date={tweet.date}
                key={tweet.author + tweet.date}
              />
            ))}
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default Dashboard;
