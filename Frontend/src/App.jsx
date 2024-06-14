
import React from 'react';
import Navbar from './Components/Navbar';
import Login from './Page/Login';
import './App.css';
// import { Footer } from 'react-bootstrap/lib/Modal';
import Footer from './Components/Footer';
// import Carousel from './Components/Carousel';
import './App.css';
import { AllRoutes } from './Routes/AllRoutes';

function App() {
  return (

    <div>

      {/* <Navbar /> */}
      {/* <Carousel /> */}
      {/* <Login /> */}
      <Footer />

      <AllRoutes/>
    </div>
  );
}

export default App;
