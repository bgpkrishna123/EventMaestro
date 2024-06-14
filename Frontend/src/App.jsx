
import React from 'react';
import './App.css';
// import { Footer } from 'react-bootstrap/lib/Modal';
import Footer from './Components/Footer';
// import Carousel from './Components/Carousel';
import './App.css';
import { AllRoutes } from './Routes/AllRoutes';
import Admin from './admin/Admin';

function App() {
  return (

    <div>
      {/* <Navbar /> */}
      {/* <Carousel /> */}
      {/* <Login /> */}
      <AllRoutes/>
      <Admin/>
      <Footer />

     
    </div>
  );
}

export default App;
