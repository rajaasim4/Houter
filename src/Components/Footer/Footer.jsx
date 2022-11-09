import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "../../Assets/Logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="Space"></div>
      <footer className="position-relative">
        <div className="Footer_blur position-absolute end-0 top-0">d</div>
        <Container className="mt-5">
          <Row>
            <Col lg="5" md="12" sm="12" className="Footer_sub">
              <img src={Logo} alt="" className="mb-3 mx-sm-auto" />
              <p className="text-muted lh-baseline ">
                We provide information about properties such as houses, villas
                and apartments to help people find their dream home
              </p>
            </Col>
            <Col lg="2" md="4" sm="6" className="Footer_sub">
              <h5>Property</h5>
              <a href="" className="nav-link fw-light">
                Home
              </a>
              <a href="" className="nav-link fw-light">
                Apartment
              </a>
              <a href="" className="nav-link fw-light">
                Villa
              </a>
            </Col>
            <Col lg="2" md="4" sm="6" className="Footer_sub">
              <h5>Article</h5>
              <a href="" className="nav-link fw-light">
                New Article
              </a>
              <a href="" className="nav-link fw-light">
                Popular Article
              </a>
              <a href="" className="nav-link fw-light">
                Most Read
              </a>
              <a href="" className="nav-link fw-light">
                Tips & Tricks
              </a>
            </Col>
            <Col lg="3" md="4" sm="6" className="Footer_sub mb-3">
              <h5>Contact</h5>
              <address>
                2464 Royal Ln. Mesa, New Jersey 45463 <br /> (671) 555-0110
                <br />
                info@hounter.com <br />
              </address>
            </Col>
          </Row>
          <Row>
            <Col lg="2" md="6" sm="8" className="mx-md-auto ms-lg-0">
              <div className="Social fs-4 d-flex justify-content-between">
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg="12" className="mt-3 d-flex justify-content-center ">
              <p>
                Copyright &copy; {new Date().getFullYear()} All rights are
                reserved By Houter
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
export default Footer;
