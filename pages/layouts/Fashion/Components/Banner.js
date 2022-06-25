import React, { Fragment } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import MasterBanner from "./MasterBanner";

const Data = [
  {
    img: "/assets/images/icon/banner_1.jpg",
    title: "LEGATIST ORIGINAL",
    desc: "당신과 함께 할 \n93만 글로벌 팬덤의 \n댄스 스튜디오 ALiEN",
    link: "/left-sidebar/collection ",

    
  },
  {
    img: "/assets/images/icon/banner_2.jpg",
    title: "LEGATIST ORIGINAL",
    desc: "당신과 함께 할 \n93만 글로벌 팬덤의 \n댄스 스튜디오 ALiEN",
    link: "/product-details/18",
  },
  {
    img: "/assets/images/icon/banner_3.jpg",
    title: "LEGATIST ORIGINAL",
    desc: "당신과 함께 할 \n93만 글로벌 팬덤의 \n댄스 스튜디오 ALiEN",
    link: "/product-details/18",
  },
];

const Banner = () => {
  return (
    <Fragment>
      <section className="p-0">
        <Slider className="slide-1 home-slider">
          {Data.map((data, i) => {
            return (
              <MasterBanner
           
                key={i}
                img={data.img}
                desc={data.desc}
                title={data.title}
                link={data.link}
              />
            );
          })}
        </Slider>
      </section>
    </Fragment>
  );
};

export default Banner;
