import React from "react";

import Footer from "../Components/Footer";
import Container from "../Components/Container";

import AppNavbar from "../Components/AppNavbar";
import Carousel from "../Components/Carousel";
import WelcomeSection from "../Components/WelcomeSection";





const HomePage = () => {
  return (
    <>
      <AppNavbar />
      <Carousel/>
      <WelcomeSection/>
      <Container />
      <Footer />
    </>
  );
};

export default HomePage;
