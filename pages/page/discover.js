import React from "react";
import Slider from "react-slick";
import { Product5 } from "../../services/script";
import { Container, Row, Col, Media } from "reactstrap";

import CommonLayout from '../../components/shop/common-layout'


const Data = [
  { img: "/assets/images/icon/cat1.png", title: "전체", link: "#" },
  { img: "/assets/images/icon/cat2.png", title: "뮤지션", link: "#" },
  { img: "/assets/images/icon/cat3.png", title: " 댄스/ 퍼포먼스", link: "#" },
  { img: "/assets/images/icon/cat4.png", title: " 디자이너", link: "#" },
  { img: "/assets/images/icon/cat5.png", title: " 사진/ 영상", link: "#" },
  { img: "/assets/images/icon/cat6.png", title: " 기획/ 연출", link: "#" },
  { img: "/assets/images/icon/cat1.png", title: "연기/ 배우", link: "#" },

];

const MasterCategory = ({ img, title, link }) => {
  return (
    <div className="category-block">
      <a href={link}>
        <div className="category-image">
          <Media style={{height:"auto"}} src={img} alt="" />
        </div>
      </a>
      <div className="category-details">
        <a href={link}>
          <h5>{title}</h5>
        </a>
      </div>
    </div>
  );
};
const Discover = () => {
  return (
    <CommonLayout parent="home" title="discover">
    <Container>
      <section className="section-b-space border-section border-top-0">
        <Row>
          <Col>
            <Slider {...Product5} className="slide-6 arrow">
              {Data.map((data, i) => {
                return (
                  <MasterCategory
                    key={i}
                    img={data.img}
                    link={data.link}
                    title={data.title}
                  />
                );
              })}
            </Slider>
          </Col>
        </Row>
      </section>
    </Container>
    </CommonLayout>
  );
};

export default Discover;
