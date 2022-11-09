import * as bootstrap from "bootstrap";
import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import Banner from "../Layout/Banner/Banner";
import FeaturedHouse from "../Layout/FeaturedHouse/FeaturedHouse";
import HouseDetails from "../Layout/HouseDetails/HouseDetails";
import SellAndBuy from "../Layout/SellAndBuy/SellAndBuy";
import Subscribe from "../Layout/Subscribe/Subscribe";
import Testimonial from "../Layout/Testimonial/Testimonial";
const Home = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Banner />
      <FeaturedHouse />
      <HouseDetails />
      <Testimonial />
      <SellAndBuy />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;
