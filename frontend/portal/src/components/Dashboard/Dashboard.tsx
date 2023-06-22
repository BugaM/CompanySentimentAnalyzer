import { Col, Row, Typography } from "antd";
import { graphql, useLazyLoadQuery } from "react-relay";

import TweetCard from "./TweetCard";
import SentimentChart from "./SentimentChart";
import { DashboardQuery } from "@/__generated__/DashboardQuery.graphql";

const Dashboard = () => {
  const data = useLazyLoadQuery<DashboardQuery>(
    graphql`
      query DashboardQuery {
        twitterPosts {
          author
          content
          date
          likes
          query
        }
      }
    `,
    {}
  );

  const tweets = [...data.twitterPosts].sort(
    (a, b) => -Number(a.likes) + Number(b.likes)
  );

  console.log(tweets);

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
            <TweetCard
              text={tweets[999].content}
              name={tweets[999].author}
              like={Number(tweets[999].likes)}
              date={tweets[999].date}
            />
            <TweetCard
              text={tweets[998].content}
              name={tweets[998].author}
              like={Number(tweets[998].likes)}
              date={tweets[998].date}
            />
            <TweetCard
              text={tweets[997].content}
              name={tweets[997].author}
              like={Number(tweets[997].likes)}
              date={tweets[997].date}
            />
            <TweetCard
              text={tweets[996].content}
              name={tweets[996].author}
              like={Number(tweets[996].likes)}
              date={tweets[996].date}
            />
          </Row>
          <Row>
            <Typography.Title level={4} style={{ marginTop: 8 }}>
              Negative
            </Typography.Title>
          </Row>
          <Row gutter={[8, 8]}>
            <TweetCard
              text={tweets[1].content}
              name={tweets[1].author}
              like={Number(tweets[1].likes)}
              date={tweets[1].date}
            />
            <TweetCard
              text={tweets[998].content}
              name={tweets[998].author}
              like={Number(tweets[998].likes)}
              date={tweets[998].date}
            />
            <TweetCard
              text={tweets[997].content}
              name={tweets[997].author}
              like={Number(tweets[997].likes)}
              date={tweets[997].date}
            />
            <TweetCard
              text={tweets[996].content}
              name={tweets[996].author}
              like={Number(tweets[996].likes)}
              date={tweets[996].date}
            />
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default Dashboard;
