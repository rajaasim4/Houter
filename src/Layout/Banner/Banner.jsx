import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { Col, Container, Row } from "react-bootstrap";
import { MdLocationPin } from "react-icons/md";
import airbnb from "../../Assets/airbnb.svg";
import ticket from "../../Assets/ticket.svg";
import traveloka from "../../Assets/traveloka.svg";
import trip from "../../Assets/trip.svg";
import NavBar from "../../Components/NavBar/NavBar";
import "./Banner.css";
const Banner = () => {
  return (
    <>
      <header>
        <NavBar />
        <div className="Banner_blur_bg"></div>
        <Container className="mt-5">
          <Row>
            <Col lg="6">
              <Fade triggerOnce={true}>
                <h1 className="Banner_main_text ">
                  find the place to <br /> live
                  <span> Your dreams</span>
                  <br />
                  easily here
                </h1>
                <p className="lh-base">
                  Everything you need about finding your place to live will be
                  here, where it will be easier for you
                </p>
              </Fade>
              <div className="Banner_search">
                <Container
                  fluid
                  className=" mt-1 d-flex justify-content-between align-items-center "
                >
                  <MdLocationPin
                    style={{ color: "#F59E0B" }}
                    className="fs-3"
                  />
                  <input
                    className="border-0 px-5"
                    type="text"
                    placeholder="Search for the Location."
                  />
                  <button className="green_btn">Search </button>
                </Container>
              </div>
              <h6 className="mt-5 fs-3">Our Sponsor</h6>
              <Zoom triggerOnce={true}>
                <Container className="d-flex justify-content-evenly align-items-center flex-wrap">
                  <img src={traveloka} alt="" className="sponsor_img" />
                  <img src={ticket} alt="" className="sponsor_img" />
                  <img src={airbnb} alt="" className="sponsor_img" />
                  <img src={trip} alt="" className="sponsor_img" />
                </Container>
              </Zoom>
            </Col>
          </Row>
        </Container>
      </header>
      <div className="Space"></div>
    </>
  );
};

export default Banner;
