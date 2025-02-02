import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/Login/LandingPage";
import AdminLogin from "./Components/Admin/AdminLogin";
import AdminSignup from "./Components/Admin/AdminSignup"; // Import the new signup page
import UserLogin from "./Components/User/UserLogin";
import "./App.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/adminlogin" element={<AdminLogin />} />
                <Route path="/adminsignup" element={<AdminSignup />} />
                <Route path="/userlogin" element={<UserLogin />} />
            </Routes>
        </Router>
    );
}

export default App;
