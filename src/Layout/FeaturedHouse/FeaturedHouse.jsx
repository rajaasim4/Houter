import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { BsHouseDoorFill } from "react-icons/bs";
import { MdApartment, MdVilla } from "react-icons/md";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Avatar1 from "../../Assets/Avatar1.svg";
import Avatar2 from "../../Assets/Avatar2.svg";
import Avatar3 from "../../Assets/Avatar3.svg";
import Avatar4 from "../../Assets/Avatar4.svg";
import fh1 from "../../Assets/fh1.png";
import fh2 from "../../Assets/fh2.png";
import fh3 from "../../Assets/fh3.png";
import fh44 from "../../Assets/fh4.png";
import FeaturedHouseCard from "../../Components/FeaturedCard/FeaturedCard";
import "./FeaturedHouse.css";

const FeaturedHouse = () => {
  const [active, setActive] = useState(1);
  const handleClick = (e) => {
    setActive(e.target.id);
  };
  return (
    <>
      <Container className="mt-5 Featured">
        <Row className="mb-5">
          <Col lg="4">
            <span style={{ color: "#F59E0B" }}>_____ Our Recomendation</span>
            <h1>Featured House</h1>
          </Col>
          <Col
            lg="8"
            className="d-flex justify-content-evenly align-items-center flex-wrap "
          >
            <button
              className={`${
                active === "1" ? "Featured_btn" : "Featured_btn_nonactive "
              } mdt`}
              id={1}
              onClick={handleClick}
            >
              <BsHouseDoorFill />
              House
            </button>
            <button
              className={`${
                active === "2" ? "Featured_btn" : "Featured_btn_nonactive"
              } mdt`}
              id={2}
              onClick={handleClick}
            >
              <MdVilla />
              Villa
            </button>
            <button
              className={`${
                active === "3" ? "Featured_btn" : "Featured_btn_nonactive"
              } mdt `}
              id={3}
              onClick={handleClick}
            >
              <MdApartment />
              Apartment
            </button>
          </Col>
        </Row>
      </Container>
      <Container className="">
        <Row className="p-0">
          <Col lg="12" md="12" className="p-0 m-0">
            <Swiper
              spaceBetween={30}
              allowSlideNext={true}
              allowSlidePrev={true}
              navigation={true}
              slidesPerView={4}
              pagination={{
                clickable: true,
              }}
              rewind={true}
              autoplay={true}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },

                580: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },

                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
            >
              <SwiperSlide>
                <FeaturedHouseCard
                  src={fh1}
                  title={"RoselandsHouse"}
                  price={"35,000"}
                  avatar={Avatar1}
                  name={"Diabbe Russell"}
                  rank={"Dr. San Jose, South Dakota"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <FeaturedHouseCard
                  src={fh2}
                  title={"Woodlandside"}
                  price={"20,000"}
                  avatar={Avatar2}
                  name={"Robert Fox"}
                  rank={"Manchester, Kentucky"}
                />
              </SwiperSlide>

              <SwiperSlide>
                <FeaturedHouseCard
                  src={fh3}
                  title={"The Old Lighthiuse"}
                  price={"44,000"}
                  avatar={Avatar3}
                  name={"Ronald Richard"}
                  rank={"Santa Ana, Illinois"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <FeaturedHouseCard
                  src={fh44}
                  title={"Cosmo's House"}
                  price={"22,000"}
                  avatar={Avatar4}
                  name={"Jenny Wilson"}
                  rank={"Preston Rd. Inglewood, Maine 98380"}
                />
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FeaturedHouse;
