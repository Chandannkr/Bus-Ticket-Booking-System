import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import LandingPage from "./Components/Login/LandingPage";
import AdminLogin from "./Components/Admin/AdminLogin";
import AdminSignup from "./Components/Admin/AdminSignup";
import UserLogin from "./Components/User/UserLogin";
import AdminHomePage from "./Components/Main/AdminHomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminsignup" element={<AdminSignup />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/adminhomepage" element={<AdminHomePage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
