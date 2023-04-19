import { Col, Row, Typography } from "antd";

import Slide4Card from "./Slide4Card";
import defaultUserIcon from "../../../../../public/defaultuser.png";
import { Slide } from "react-awesome-reveal";

const { Text } = Typography;

const Slide4 = () => {
  return (
    <Slide direction="up" duration={1000} triggerOnce>
      <Row justify={"center"} style={{ paddingBottom: "32px" }}>
        <Col span={20}>
          <Row justify={"center"}>
            <Text strong style={{ fontSize: 18, paddingBottom: "32px" }}>
              {"Developers"}
            </Text>
          </Row>
          <Row justify={"center"} gutter={[32, 32]}>
            <Col span={3}>
              <Row justify={"center"}>
                <Slide4Card
                  icon={defaultUserIcon.src}
                  name={"Arthur Stevenson"}
                  github={"..."}
                  linkedin={"..."}
                />
              </Row>
            </Col>
            <Col span={3}>
              <Row justify={"center"}>
                <Slide4Card
                  icon={defaultUserIcon.src}
                  name={"Eduardo Simplício"}
                  github={"https://github.com/edmsimplicio"}
                  linkedin={
                    "https://www.linkedin.com/in/eduardo-simplicio-10b8b423b/"
                  }
                />
              </Row>
            </Col>
            <Col span={3}>
              <Row justify={"center"}>
                <Slide4Card
                  icon={defaultUserIcon.src}
                  name={"Marcelo Buga"}
                  github={"..."}
                  linkedin={"..."}
                />
              </Row>
            </Col>
            <Col span={3}>
              <Row justify={"center"}>
                <Slide4Card
                  icon={defaultUserIcon.src}
                  name={"Mateus Cristo"}
                  github={"..."}
                  linkedin={"..."}
                />
              </Row>
            </Col>
            <Col span={3}>
              <Row>
                <Slide4Card
                  icon={defaultUserIcon.src}
                  name={"Matheus Ramos"}
                  github={"..."}
                  linkedin={"..."}
                />
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Slide>
  );
};

export default Slide4;
