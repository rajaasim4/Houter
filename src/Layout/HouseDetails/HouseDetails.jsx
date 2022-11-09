import React from "react";
import { Slide } from "react-awesome-reveal";
import { Col, Container, Row } from "react-bootstrap";
import {
  GiBathtub,
  GiStairs,
  IoIosBed,
  RiCarWashingFill,
} from "react-icons/all";
import Avatar1 from "../../Assets/Avatar1.svg";
import House_details from "../../Assets/House_details.png";
import "./HouseDetails.css";
const HouseDetails = () => {
  return (
    <>
      <Container className="my-5">
        <Row className="mt-5">
          <Col lg="6" className="py-3">
            <Slide triggerOnce={true}>
              <span style={{ color: "#F59E0B" }}>_____ Ready To Sell</span>
              <h1>Let’s tour and see our house!</h1>
              <p className="text-muted my-1">
                Houses recommended by our partners that have been <br /> curated
                to become the home of your dreams!
              </p>
              <h5>House Detail</h5>
              <Container className="my-4">
                <Row>
                  <Col lg="4" md="6" sm="12">
                    <span className="house_detail_icon">
                      <GiBathtub className="fs-4" /> 4 Bedrooms
                    </span>
                    <br />
                    <span className="house_detail_icon ">
                      <IoIosBed className="fs-4" /> 2 Bathrooms
                    </span>
                  </Col>
                  <Col lg="4" md="6" sm="12" className="house_detail_list">
                    {" "}
                    <span className="house_detail_icon">
                      <RiCarWashingFill className="fs-4" /> 1 Carport
                    </span>{" "}
                    <br />
                    <span className="house_detail_icon">
                      <GiStairs className="fs-4" /> 4 Floors
                    </span>
                  </Col>
                </Row>
              </Container>
              <hr />
              <div className="Contact_info d-flex justify-content-between w-auto">
                <img src={Avatar1} alt="" />
                <h6>
                  Ava Adams <br />
                  <span className="text-muted">Manager Director</span>
                </h6>
                <div className="green_btn house_details_btn">Contact Now</div>
              </div>
            </Slide>
          </Col>
          <Col lg="6">
            <img src={House_details} className="w-100" alt="" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HouseDetails;
