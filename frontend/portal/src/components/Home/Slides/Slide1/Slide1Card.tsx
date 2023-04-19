import { ReactNode } from "react";
import { Card, Col, Row, Space, Typography } from "antd";

const { Meta } = Card;
const { Text } = Typography;

interface HomeCardProps {
  title: string;
  icon: ReactNode;
  description: string;
}

const Slide1Card = ({ icon, title, description }: HomeCardProps) => {
  return (
    <Card
      cover={
        <Space direction="vertical" style={{ paddingTop: "16px" }}>
          <Row justify={"center"} align={"middle"}>
            <Col span={20}>
              <Row justify={"center"}>
                <Text strong style={{ fontSize: 20 }}>
                  {title}
                </Text>
              </Row>
            </Col>
          </Row>
          <Row justify={"center"}>{icon}</Row>
        </Space>
      }
    >
      <Row justify={"center"}>
        <Meta description={description} style={{ textAlign: "center" }} />
      </Row>
    </Card>
  );
};

export default Slide1Card;
