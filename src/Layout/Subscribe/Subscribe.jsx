import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillMail } from "react-icons/all";
import Avatar1 from "../../Assets/Avatar1.svg";
import Avatar2 from "../../Assets/Avatar2.svg";
import Avatar3 from "../../Assets/Avatar3.svg";
import Avatar4 from "../../Assets/Avatar4.svg";
import Avatar5 from "../../Assets/Avatar5.svg";
import Subscribe1 from "../../Assets/Subscribe1.png";
import Subscribe2 from "../../Assets/Subscribe2.png";
import Subscribe3 from "../../Assets/Subscribe3.png";
import Subscribe4 from "../../Assets/Subscribe4.png";

import "./Subscribe.css";
const Subscribe = () => {
  return (
    <>
      <div className="Space"></div>
      <Container>
        <Row>
          <Col lg="12">
            <div className="Subscribe rounded-4 ">
              <Container>
                <Row className="py-5">
                  <Col lg="3" className="position-relative">
                    <br />
                    <br />
                    <img
                      src={Avatar1}
                      alt=""
                      className="float-start mb-3 d-block"
                    />
                    <br />
                    <br />
                    <img
                      src={Avatar2}
                      alt=""
                      className="float-end d-block mb-3"
                    />
                    <br />
                    <img
                      src={Avatar3}
                      alt=""
                      className="float-start d-block "
                    />
                    <br />
                    <br />
                    <img
                      src={Subscribe1}
                      alt=""
                      className="position-absolute my-3 top-50 end-50 d-block "
                    />
                    <img
                      src={Subscribe2}
                      alt=""
                      className="position-absolute top-0 my-3 ms-5 end-50 d-block "
                    />
                  </Col>
                  <Col lg="6">
                    <h1 className="text-center text-capitalize my-4">
                      Subscribe For More Info <br /> and update from Hounter
                    </h1>
                    <div className="Banner_search">
                      <Container className=" mt-1 d-flex justify-content-around align-items-center ">
                        <AiFillMail
                          style={{ color: "#F59E0B" }}
                          className="fs-3"
                        />
                        <input
                          className="border-0 px-5 sm-mx-2 Subscribe_input"
                          type="text"
                          placeholder="Enter Your Email."
                        />
                        <button className="green_btn Subscribe_btn">
                          Subscribe
                        </button>
                      </Container>
                    </div>
                  </Col>
                  <Col lg="3" className="position-relative mt-md-4">
                    <br />
                    <img
                      src={Avatar4}
                      alt=""
                      className="float-start mb-3 d-block"
                    />
                    <br />
                    <br />
                    <img
                      src={Avatar5}
                      alt=""
                      className="float-end d-block mb-3"
                    />
                    <br />

                    <img
                      src={Avatar1}
                      alt=""
                      className="float-start d-block "
                    />
                    <br />
                    <br />
                    <img
                      src={Subscribe3}
                      alt=""
                      className="position-absolute top-50 end-50 d-block "
                    />
                    <img
                      src={Subscribe4}
                      alt=""
                      className="position-absolute top-0 end-50 d-block "
                    />
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Subscribe;
