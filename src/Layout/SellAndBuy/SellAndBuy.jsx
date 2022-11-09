import React from "react";
import { Zoom } from "react-awesome-reveal";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillClockCircle } from "react-icons/all";
import Avatar1 from "../../Assets/Avatar1.svg";
import Avatar2 from "../../Assets/Avatar2.svg";
import Avatar3 from "../../Assets/Avatar3.svg";
import Avatar6 from "../../Assets/Avatar6.svg";
import Img1 from "../../Assets/Buy&Sell1.png";
import Img2 from "../../Assets/Buy&Sell2.png";
import Img3 from "../../Assets/Buy&Sell3.png";
import Img4 from "../../Assets/Buy&Sell4.png";
import SellAndBuyCard from "../../Components/SellAndBuyCard/SellAndBuyCard";
import "./SellAndBuy.css";
const SellAndBuy = () => {
  let date = new Date().toDateString();
  return (
    <div className="SellAndBuy ">
      <div className="SellAndBuy_blur"></div>
      <Container>
        <Row>
          <Zoom triggerOnce={true}>
            <Col lg="12" className="d-flex align-items-center flex-column my-5">
              <span style={{ color: "#F59E0B" }}>_____ Ready To Sell</span>
              <h1 className="text-capitalize">
                Find out more about <br /> selling and buying homes
              </h1>
              <button className="green_btn">More Article</button>
            </Col>
          </Zoom>
        </Row>
        <Row>
          <Col
            lg="6"
            className=" d-flex gap-4 flex-column flex-md-row flex-wrap"
          >
            <SellAndBuyCard
              imgsrc={Img1}
              name="Dainne Russel"
              profile={Avatar1}
              desc={"The things we need to check when we want to buy a house"}
            />
            <SellAndBuyCard
              imgsrc={Img2}
              name="Courteny Henry"
              profile={Avatar2}
              desc={
                "7 Ways to distinguish the quality of the house we want to buy"
              }
            />
            <SellAndBuyCard
              imgsrc={Img3}
              name="Derney Robertson"
              profile={Avatar3}
              desc={
                "The best way to know the quality of the house we want to buy"
              }
            />
          </Col>

          <Col lg="6">
            <Row>
			{/*<Zoom triggerOnce={true}>*/}
                <img src={Img4} alt="" />
					{/*</Zoom>*/}

              <div className="Buy_sell_profile my-3">
                <img src={Avatar3} alt="" />
                <span className="text-muted ms-3">Cameron Willson</span>
              </div>
              <p className="fw-semibold">
                12 Things to know before buying a house
              </p>
              <p className="text-muted">
                Want to buy a house but are unsure about what we should know,
                here I will try to explain what we should know and check when we
                want to buy a house
              </p>
              <div className="Buy_time text-muted">
                <AiFillClockCircle />
                <span> 4 min read | {date}</span>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SellAndBuy;
