import { Avatar, Card, Col, Row, Space, Typography } from "antd";
import {
  MessageOutlined,
  RetweetOutlined,
  HeartOutlined,
} from "@ant-design/icons";

import as from "../../../public/defaultuser.png";
import Link from "next/link";

interface TweetCardProps {
  date: string;
  name: string;
  text: string;
  like: number;
}

const TweetCard = ({ date, name, text, like }: TweetCardProps) => {
  return (
    <Col span={12}>
      <Card size="small">
        <Space direction="vertical" style={{ width: "100%", minHeight: 175 }}>
          <Row align="middle">
            <Col flex="auto">
              <Space>
                <Avatar src={as.src} />
                <Link href={`https://twitter.com/${name}/`} target="_blank">
                  <Typography.Text
                    style={{ color: "#00acee" }}
                  >{`@${name}`}</Typography.Text>
                </Link>
              </Space>
            </Col>
            <Col flex="none">
              <Typography.Text type="secondary" style={{ fontSize: 11 }}>
                {date}
              </Typography.Text>
            </Col>
          </Row>
          <Row>
            <Typography.Text style={{ fontSize: 13 }}>{text}</Typography.Text>
          </Row>
          <Row
            justify="end"
            style={{ position: "absolute", bottom: 12, right: 24 }}
          >
            <Space size="small">
              {like}
              <HeartOutlined />
            </Space>
          </Row>
        </Space>
      </Card>
    </Col>
  );
};

export default TweetCard;
