import { Avatar, Col, Image, Row, Space, Typography } from "antd";

const { Text } = Typography;

interface Slide3QuoteProps {
  iconSrc: string;
  quoteText: string;
  authorName: string;
  authorDescription: string;
}

const Slide3Quote = ({
  iconSrc,
  quoteText,
  authorName,
  authorDescription,
}: Slide3QuoteProps) => {
  return (
    <Row
      justify={"center"}
      style={{ paddingTop: "64px", paddingBottom: "64px", textAlign: "center" }}
    >
      <Col span={16}>
        <Space size={32} direction={"vertical"}>
          <Row justify={"center"}>
            <Avatar
              size={100}
              shape={"circle"}
              icon={<Image src={iconSrc} alt={authorName} preview={false} />}
            />
          </Row>
          <Row justify={"center"}>
            <Text style={{ fontSize: 20 }} type={"secondary"}>
              {quoteText}
            </Text>
          </Row>
          <Row justify={"center"}>
            <Space direction="vertical">
              <Typography.Text style={{ fontSize: 32 }} strong>
                {authorName}
              </Typography.Text>
              <Typography.Text type="secondary" strong>
                {authorDescription}
              </Typography.Text>
            </Space>
          </Row>
        </Space>
      </Col>
    </Row>
  );
};

export default Slide3Quote;
