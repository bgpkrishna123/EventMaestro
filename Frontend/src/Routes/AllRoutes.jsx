import { Route, Routes } from "react-router-dom";
import HomePage from "../Page/HomePage";
import Login from "../Page/Login";



export const AllRoutes = () => {
 
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<Login/>} />
    </Routes>
  );
};