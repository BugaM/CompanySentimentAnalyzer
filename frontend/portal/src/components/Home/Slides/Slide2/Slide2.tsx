import { Slide } from "react-awesome-reveal";
import { Col, Divider, Row, Space, Typography } from "antd";

const { Text, Title } = Typography;

const Slide2 = () => {
  return (
    <Slide direction="up" duration={1000} triggerOnce>
      <Col span={24}>
        <Row justify={"center"}>
          <Title level={2}>{"Mock Title Example"}</Title>
        </Row>
        <Row justify={"center"}>
          <Col span={1}>
            <Divider
              style={{
                backgroundColor: "#0d8d87",
                marginTop: 15,
                marginBottom: 50,
                borderWidth: "5px",
              }}
            />
          </Col>
        </Row>
        <Row justify={"center"} style={{ textAlign: "center" }}>
          <Col span={16}>
            <Space direction="vertical" size={32}>
              <Row justify={"center"}>
                <Text type="secondary" style={{ fontSize: 18 }}>
                  Lorem ipsum dolor sit amet. Aut pariatur corporis aut repellat
                  quia cum numquam quia et architecto quia
                </Text>
              </Row>
              <Row justify={"center"}>
                <Text type="secondary" style={{ fontSize: 18 }}>
                  In laudantium unde et ipsum accusantium hic eligendi magni ut
                  necessitatibus dolores nam nemo sequi. Vel libero accusantium
                  et consequatur odit non internos odit sed dolor eligendi ut
                  veritatis omnis et quia illum.
                </Text>
              </Row>
            </Space>
          </Col>
        </Row>
      </Col>
    </Slide>
  );
};

export default Slide2;
