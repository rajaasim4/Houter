import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaBars } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../../Assets/Logo.png";
import "./NavBar.css";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [sticky, setStickyClass] = useState("relative");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;

      windowHeight > 550 ? setStickyClass("stickynavbar") : setStickyClass("");
    }
  };

  return (
    <>
      <Navbar className={` ${sticky} `}>
        <Container>
          <Navbar.Brand href="/#" className="ms-md-3">
            <img src={Logo} alt="" />
          </Navbar.Brand>

          <Nav>
            <ScrollLink className="nav-link px-4" to="About" smooth={true}>
              About Us
            </ScrollLink>
            <ScrollLink
              className="nav-link px-4"
              to="SellAndBuy"
              offset={-40}
              smooth={true}
              onClick={handleClose}
            >
              Article
            </ScrollLink>
            <ScrollLink className="nav-link px-4" to="Featured" smooth={true}>
              Property
            </ScrollLink>
            <ScrollLink
              className="nav-link px-4"
              to="/"
              style={{ backgroundColor: "#D1FAE5", color: "#047857" }}
              smooth={true}
            >
              Sign Up
            </ScrollLink>
          </Nav>
        </Container>
        <div className="Hamburger" onClick={handleShow}>
          <FaBars />
        </div>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav>
              <ScrollLink
                className="nav-link px-4"
                to="About"
                smooth={true}
                onClick={handleClose}
              >
                About Us
              </ScrollLink>
              <ScrollLink
                className="nav-link px-4"
                to="SellAndBuy"
                offset={-40}
                smooth={true}
                onClick={handleClose}
              >
                Article
              </ScrollLink>
              <ScrollLink
                className="nav-link px-4"
                to="Featured"
                smooth={true}
                onClick={handleClose}
              >
                Property
              </ScrollLink>
              <ScrollLink
                className="nav-link px-4"
                to="About"
                style={{ backgroundColor: "#D1FAE5", color: "#047857" }}
                smooth={true}
                onClick={handleClose}
              >
                Sign Up
              </ScrollLink>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>
    </>
  );
};
export default NavBar;
