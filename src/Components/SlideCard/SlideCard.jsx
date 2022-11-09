import { Col, Container, Row } from "react-bootstrap";
import { AiFillStar } from "react-icons/all";
import Avatar1 from "../../Assets/Avatar1.svg";
let SlideCard = (props) => {
  return (
    <>
      <Container className="position-relative py-5">
        <Row>
          <Col lg="12" className="SlideCard_img">
            <img src={props.imgsrc} className=" w-100 h-75 " alt="" />
          </Col>
          <Col lg="12">
            <div className="Testimonial_main px-5 pt-3">
              <h3>Best! I got the house I wanted through Hounter</h3>
              <p className="text-muted">
                Through this website I can get a house with the type and
                specifications I want very easily, without a complicated process
                to be able to find information on the house we want.
              </p>
              <div className="Testimonial_rating py-3">
                <Container>
                  <Row className="d-flex justify-content-between">
                    <Col
                      lg="4"
                      className="d-flex justify-content-evenly "
                      md="6"
                      sm="12"
                    >
                      <img src={Avatar1} alt="" />
                      <h6>
                        Ava Adams <br />
                        <span className="text-muted">Manager Director</span>
                      </h6>
                    </Col>
                    <Col
                      lg="6"
                      className=" d-flex justify-content-end align-items-center pe-5 "
                      md="6"
                      sm="12"
                    >
                      <span className="fs-4 Testimonial_rating">
                        <AiFillStar style={{ color: "#F59E0B" }} />
                        4.3
                      </span>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SlideCard;
