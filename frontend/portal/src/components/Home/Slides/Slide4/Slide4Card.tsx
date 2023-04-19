import { Avatar, Button, Col, Image, Row, Typography } from "antd";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const { Text } = Typography;

interface Slide4CardProps {
  icon: string;
  name: string;
  github: string;
  linkedin: string;
}

const Slide4Card = ({ icon, name, github, linkedin }: Slide4CardProps) => {
  return (
    <Row justify={"center"} align={"middle"}>
      <Col span={24}>
        <Row justify={"center"}>
          <Avatar
            size={50}
            shape={"circle"}
            icon={<Image src={icon} alt={name} preview={false} />}
          />
        </Row>
        <Row style={{ textAlign: "center" }}>
          <Text strong style={{ fontSize: 13, textAlign: "center" }}>
            {name}
          </Text>
        </Row>
        <Row justify={"center"}>
          <Button
            icon={<FaGithub color="#0d8d87" />}
            href={github}
            type="link"
            danger
          />
          <Button
            icon={<FaLinkedin color="#0d8d87" />}
            href={linkedin}
            type="link"
            danger
          />
        </Row>
      </Col>
    </Row>
  );
};

export default Slide4Card;
