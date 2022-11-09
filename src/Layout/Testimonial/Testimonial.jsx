import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide1 from "../../Assets/Slide1.png";
import Slide2 from "../../Assets/Slide2.png";
import Slide3 from "../../Assets/Slide3.png";
import SlideCard from "../../Components/SlideCard/SlideCard";
import "./Testimonial.css";
const Testimonial = () => {
  return (
    <>
      <div className="Space"></div>
      <Container className="mt-5 About">
        <Row>
          <Col lg="12" className="d-flex align-items-center flex-column my-3">
            <span style={{ color: "#F59E0B" }}>_____ Ready To Sell</span>
            <h1>Let’s tour and see our house!</h1>
          </Col>
        </Row>
        <div className="Testimonial_slide">
          <Row className="d-flex justify-content-center py-5">
            <Col lg="10" className="mx-auto ">
              <Swiper
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                autoplay={true}
                speed={800}
                loop={true}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <SlideCard imgsrc={Slide1} />
                </SwiperSlide>
                <SwiperSlide>
                  <SlideCard imgsrc={Slide2} />
                </SwiperSlide>
                <SwiperSlide>
                  <SlideCard imgsrc={Slide3} />
                </SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="Space"></div>
    </>
  );
};

export default Testimonial;
