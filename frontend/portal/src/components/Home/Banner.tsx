import { Button, Col, Image, Row, Space, Typography } from "antd";

import BannerImg from "../../../public/Banner.jpg";

const { Title, Paragraph } = Typography;

const Banner = () => {
  return (
    <Row align={"middle"} style={{ paddingRight: "32px" }}>
      <Col span={16}>
        <Image src={BannerImg.src} alt={"Banner Image"} preview={false} />
      </Col>
      <Col span={8}>
        <Space direction={"vertical"} size={16}>
          <Row justify={"start"}>
            <Title level={2}>{"Sentiment Analyzer"}</Title>
          </Row>
          <Row>
            <Paragraph type={"secondary"}>
              {
                "Reach your costumers feelings through social media and artificial intelligence"
              }
            </Paragraph>
          </Row>
          <Row>
            <Button type="primary" href={"/api/auth/login"}>
              {"Try Now"}
            </Button>
          </Row>
        </Space>
      </Col>
    </Row>
  );
};

export default Banner;
