import { Avatar, Card, Col, Row, Space, Typography } from "antd";
import {
  MessageOutlined,
  RetweetOutlined,
  HeartOutlined,
} from "@ant-design/icons";

import maximoIcon from "../../../public/maximo.jpg";

const TweetCard = () => {
  return (
    <Col span={12}>
      <Card size="small">
        <Space direction="vertical">
          <Row align="middle">
            <Col flex="auto">
              <Space>
                <Avatar src={maximoIcon.src} />
                Mangus Maximus
              </Space>
            </Col>
            <Col flex="none">
              <Typography.Text type="secondary" style={{ fontSize: 11 }}>
                15 abr 23
              </Typography.Text>
            </Col>
          </Row>
          <Row>
            <Typography.Text style={{ fontSize: 13 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography.Text>
          </Row>
          <Row justify="start">
            <Space size="large">
              <Space size="small">
                100
                <MessageOutlined />
              </Space>
              <Space size="small">
                100
                <RetweetOutlined />
              </Space>
              <Space size="small">
                100
                <HeartOutlined />
              </Space>
            </Space>
          </Row>
        </Space>
      </Card>
    </Col>
  );
};

export default TweetCard;
