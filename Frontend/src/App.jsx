
import React from 'react';
// import AppNavbar from './Components/AppNavbar';
// import Login from './Page/Login';
import './App.css';
// import { Footer } from 'react-bootstrap/lib/Modal';
import WelcomeSection from './Components/WelcomeSection';
import Footer from './Components/Footer';
import Carousel from './Components/Carousel';
import './App.css';
import { AllRoutes } from './Routes/AllRoutes';
import Middle from './Components/Middle';
import InternationalWeddingPlanner from './Components/InternationalWeddingPlanner';
import VideosSection from './Components/VideoSection';

function App() {
  return (
    <>
      {/* <AppNavbar />
      <Carousel />
      <WelcomeSection />
      <Middle />
      <InternationalWeddingPlanner />
      <VideosSection />
      <Footer /> */}
      <AllRoutes />

    </>

  );
}

export default App;