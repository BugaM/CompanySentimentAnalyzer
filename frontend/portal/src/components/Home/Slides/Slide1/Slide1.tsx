import { Row, Col } from "antd";
import { Slide } from "react-awesome-reveal";
import { FaBrain, FaChartLine, FaTwitter } from "react-icons/fa";

import HomeCard from "./Slide1Card";

const Slide1 = () => {
  return (
    <Slide direction="up" duration={1000} triggerOnce>
      <Row justify={"center"} gutter={[64, 64]} align={"middle"}>
        <Col span={6}>
          <HomeCard
            title={"Scrapping"}
            description={
              "Get sentiments about your business through social media"
            }
            icon={<FaTwitter color={"#0d8d87"} size={100} />}
          />
        </Col>
        <Col span={6}>
          <HomeCard
            title={"AI"}
            description={"Intelligence to extract useful information"}
            icon={<FaBrain color="#0d8d87" size={100} />}
          />
        </Col>
        <Col span={6}>
          <HomeCard
            title={"Analytics"}
            description={"Get statistics from what people are feeling"}
            icon={<FaChartLine color="#0d8d87" size={100} />}
          />
        </Col>
      </Row>
    </Slide>
  );
};

export default Slide1;
