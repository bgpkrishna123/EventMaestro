import { Route, Routes } from "react-router-dom";
import HomePage from "../Page/HomePage";
import Login from "../Page/Login";
import Category from "../admin/Admin";
import EventPage from "../Page/EventPage";
import { Checkout } from "../Components/Checkout";



export const AllRoutes = () => {
 
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<Login/>} />
      <Route path="/creator" element={<Category/>} />
      <Route path="/eventDetails" element={<EventPage/>} />
      <Route path="/checkout" element={<Checkout/>} />
      

    </Routes>
  );
};