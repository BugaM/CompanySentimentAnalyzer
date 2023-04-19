import { Col, Row } from "antd";
import Home from "@/components/Home";

export default function HomePage() {
  return (
    <Col span={24}>
      <Row justify="center">
        <Home />
      </Row>
    </Col>
  );
}
