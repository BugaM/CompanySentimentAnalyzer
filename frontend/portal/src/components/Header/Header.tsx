import { Col, Layout, Row, Typography } from "antd";

import LoginBox from "./LoginBox";

const { Header } = Layout;
const { Text } = Typography;

const AppHeader = () => {
  return (
    <Header style={{ height: "80px" }}>
      <Row style={{ height: "100%" }}>
        <Col span={10}>
          <Row justify={"start"} style={{ height: "100%" }}>
            <Text
              strong={true}
              style={{
                fontSize: 30,
                whiteSpace: "nowrap",
                margin: "auto 0 auto 0",
              }}
            >
              {"Sentzer"}
            </Text>
          </Row>
        </Col>
        <Col span={14}>
          <Row justify={"end"} style={{ height: "100%" }}>
            <LoginBox />
          </Row>
        </Col>
      </Row>
    </Header>
  );
};

export default AppHeader;
