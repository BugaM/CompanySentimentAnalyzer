import { Col, Typography, Row } from "antd";

const { Text } = Typography;

export default function Home() {
  return (
    <Col span={24}>
      <Row justify="center">
        <Text>Home</Text>
      </Row>
    </Col>
  );
}
