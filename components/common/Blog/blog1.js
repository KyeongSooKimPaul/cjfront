import React, { Fragment } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { gql } from '@apollo/client';
import { useQuery } from "@apollo/client";
import { Slider3 } from "../../../services/script";
import { Media, Container, Row, Col } from "reactstrap";

const GET_PRODUCTS = gql`
  query blog($type: String!) {
    blog(type: $type) {
      img
      link
      title
      desc
      date
    }
  }
`;

const BlogSection = ({ type, sectionClass, title, inner, hrClass }) => {
  var { data } = useQuery(GET_PRODUCTS, {
    variables: {
      type: type,
    },
  });
  return (
    <Fragment>
      <section className={sectionClass}>
        <Container>
          <Row>
            <Col md="12">
              <div className={title}>
                <h4>Our Mission</h4>
                <h3 className={inner}>브랜드 마케팅 비용, 유통비용 등을 최소화하여 고객들에게 그 혜택을 돌려드리고자 합니다.</h3>
                {hrClass ? (
                  <hr role="tournament6"></hr>
                ) : (
                  <div className="line">
                    <span></span>
                  </div>
                )}
              </div>
              <Slider {...Slider3} className="slide-3 no-arrow ">
                {data &&
                  data.blog.map((item, index) => (
                    <Col md="12" key={index}>
                      <Link href={`/blogs/blog_detail`}>
                        <div className="classic-effect">
                          <Media src={item.img} className="img-fluid" alt="" />
                        </div>
                      </Link>
                      <div className="blog-details">
                        <h4>{item.title}</h4>
                        <Link href={`/blogs/blog_detail`}>
                          <p>{item.desc} </p>
                        </Link>
                        <hr className="style1" />
                        <h6>by: {item.date}</h6>
                      </div>
                    </Col>
                  ))}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};
export default BlogSection;
