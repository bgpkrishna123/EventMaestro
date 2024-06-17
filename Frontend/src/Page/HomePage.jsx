import React from "react";
import Footer from "../Components/Footer";
import VideosSection from "../Components/VideoSection";
import InternationalWeddingPlanner from "../Components/InternationalWeddingPlanner";
import EventManagementSection from "../Components/Middle";
import WelcomeSection from "../Components/WelcomeSection";
import Carousel from "../Components/Carousel";
import AppNavbar from "../Components/AppNavbar";
import Container from "../Components/Container";
import PhotoGallery from "../Components/PhotoGallery";

const HomePage = () => {
  return (
    <>
      <AppNavbar />
      <Carousel />
      <WelcomeSection />
      <EventManagementSection />
      <InternationalWeddingPlanner />
      <Container />
      <VideosSection />
      <PhotoGallery />
      <Footer />
    </>
  );
};

export default HomePage;
