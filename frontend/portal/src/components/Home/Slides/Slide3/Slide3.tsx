import { Slide } from "react-awesome-reveal";
import { Carousel, Col, Row, Layout } from "antd";

import HomeQuote from "./Slide3Quote";
import alexandreIcon from "../../../../../public/alexandre.jpg";
import maximoIcon from "../../../../../public/maximo.jpg";

const { Content } = Layout;

const Slide3 = () => {
  return (
    <Slide direction="up" duration={1000} triggerOnce>
      <Row justify={"center"}>
        <Col span={22}>
          <Carousel style={{ backgroundColor: "#0d8d87" }} autoplay>
            <Content>
              <HomeQuote
                iconSrc={alexandreIcon.src}
                quoteText={
                  "In laudantium unde et ipsum accusantium hic eligendi magni utnecessitatibus dolores nam nemo sequi. Vel libero accusantium etconsequatur odit non internos odit sed dolor eligendi ut veritatisomnis et quia illum."
                }
                authorName={"Alexandre Bernat"}
                authorDescription={"Start Carreiras CEO"}
              />
            </Content>
            <Content>
              <HomeQuote
                iconSrc={maximoIcon.src}
                quoteText={
                  "In laudantium unde et ipsum accusantium hic eligendi magni utnecessitatibus dolores nam nemo sequi. Vel libero accusantium etconsequatur odit non internos odit sed dolor eligendi ut veritatisomnis et quia illum."
                }
                authorName={"Marcos Máximo"}
                authorDescription={"Professor do ITA e diretor da ITAndroids"}
              />
            </Content>
          </Carousel>
        </Col>
      </Row>
    </Slide>
  );
};

export default Slide3;
