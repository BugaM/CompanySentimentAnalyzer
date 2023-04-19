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
            <Title level={2}>{"Mock Motivational Phrase."}</Title>
          </Row>
          <Row>
            <Paragraph type={"secondary"}>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum."
              }
            </Paragraph>
          </Row>
          <Row>
            <Button type="primary">{"Try Now"}</Button>
          </Row>
        </Space>
      </Col>
    </Row>
  );
};

export default Banner;
