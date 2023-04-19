import { Col, Space } from "antd";

import Banner from "./Banner";
import Slide1 from "./Slides/Slide1/Slide1";
import Slide2 from "./Slides/Slide2/Slide2";
import Slide3 from "./Slides/Slide3/Slide3";
import Slide4 from "./Slides/Slide4/Slide4";

const Home = () => {
  return (
    <Col span={24}>
      <Space direction="vertical" style={{ width: "100%" }} size={64}>
        <Banner />
        <Slide1 />
        <Slide2 />
        <Slide3 />
        <Slide4 />
      </Space>
    </Col>
  );
};

export default Home;
