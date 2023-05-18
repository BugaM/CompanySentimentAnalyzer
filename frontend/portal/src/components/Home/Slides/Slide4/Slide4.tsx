import { Col, Row, Typography } from "antd";

import Slide4Card from "./Slide4Card";
import bugaIcon from "../../../../../public/buga.png";
import arthurIcon from "../../../../../public/arthur.jpg";
import eduardoIcon from "../../../../../public/eduardo.jpg";
import matheusIcon from "../../../../../public/matheus.png";
import mateusIcon from "../../../../../public/mateus.jpg";

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
                  icon={arthurIcon.src}
                  name={"Arthur Stevenson"}
                  github={"https://github.com/Costa-SM"}
                  linkedin={"https://www.linkedin.com/in/arthurcstevenson/"}
                />
              </Row>
            </Col>
            <Col span={3}>
              <Row justify={"center"}>
                <Slide4Card
                  icon={eduardoIcon.src}
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
                  icon={bugaIcon.src}
                  name={"Marcelo Buga"}
                  github={"https://github.com/BugaM"}
                  linkedin={"https://www.linkedin.com/in/marcelo-buga/"}
                />
              </Row>
            </Col>
            <Col span={3}>
              <Row justify={"center"}>
                <Slide4Card
                  icon={mateusIcon.src}
                  name={"Mateus Melo"}
                  github={"https://github.com/MateusCristoMelo"}
                  linkedin={"https://www.linkedin.com/in/mateuscristomelo/"}
                />
              </Row>
            </Col>
            <Col span={3}>
              <Row>
                <Slide4Card
                  icon={matheusIcon.src}
                  name={"Matheus Ramos"}
                  github={"https://github.com/matheus-srm"}
                  linkedin={
                    "https://www.linkedin.com/in/matheus-silva-ramos-27477a1b5/"
                  }
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
