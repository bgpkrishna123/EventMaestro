import React, { useState } from "react";
import Footer from "../Components/Footer";
import VideosSection from "../Components/VideoSection";
import InternationalWeddingPlanner from "../Components/InternationalWeddingPlanner";
import EventManagementSection from "../Components/Middle";
import WelcomeSection from "../Components/WelcomeSection";
import Carousel from "../Components/Carousel";
import AppNavbar from "../Components/AppNavbar";
import Container from "../Components/Container";
import OurServices from "../Components/OurServices";



const HomePage = () => {
  const [data, setData] = useState([]);
  return (
    <>
      <AppNavbar data={data} setData={setData} />
      <Carousel />
      <WelcomeSection />
      <EventManagementSection />
      <InternationalWeddingPlanner />
      <Container data={data} setData={setData} />
      <VideosSection />
      <OurServices />
      <Footer />
    </>
  );
};

export default HomePage;