import React from "react";
import { Slide, Zoom } from "react-awesome-reveal";
import { Col, Row } from "react-bootstrap";
import { AiFillClockCircle } from "react-icons/all";
import Avatar1 from "../../Assets/Avatar1.svg";
import Img1 from "../../Assets/Buy&Sell1.png";
const SellAndBuyCard = (props) => {
  let date = new Date().toDateString();
  return (
    <Row>
      <Col lg="4" md="4" sm="12" className="mb-md-3 sellandbuy_img">
        <img src={props.imgsrc} alt="" className="mx-sm-auto w-100" />
      </Col>

      <Col lg="8" md="8" sm="12">
        <Slide direction="right" triggerOnce={true}>
          <div className="Buy_sell_profile mb-md-2">
            <img src={props.profile} alt="" />

            <span className="text-muted ms-3">{props.name}</span>
          </div>
          <p className="fw-semibold">{props.desc}</p>
          <div className="Buy_time text-muted">
            <AiFillClockCircle />
            <span> 4 min read | {date}</span>
          </div>
        </Slide>
      </Col>
    </Row>
  );
};

export default SellAndBuyCard;
