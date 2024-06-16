
import React from 'react';
import AppNavbar from './Components/AppNavbar';
import Login from './Page/Login';
import './App.css';
// import { Footer } from 'react-bootstrap/lib/Modal';
import WelcomeSection from './Components/WelcomeSection';
import Footer from './Components/Footer';
import Carousel from './Components/Carousel';
import './App.css';
import { AllRoutes } from './Routes/AllRoutes';


function App() {
  return (
    <div>
      <AppNavbar />
      <Carousel />
      {/* <Login /> */}
      <WelcomeSection />
      <Footer />
      {/* <AllRoutes /> */}
    </div>

  );
}

export default App;
