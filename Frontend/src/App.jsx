import React from 'react';
import Navbar from './components/Navbar';
import Login from './Page/Login';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <h1>Event-Mestro</h1>
      <Login />
    </div>
  );
}

export default App;
