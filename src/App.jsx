import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/Login/LandingPage";
import AdminLogin from "./Components/Admin/AdminLogin";
import AdminSignup from "./Components/Admin/AdminSignup"; 
import UserLogin from "./Components/User/UserLogin";
import AdminHomePage from "./Components/Main/AdminHomePage"
import "./App.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/adminlogin" element={<AdminLogin />} />
                <Route path="/adminsignup" element={<AdminSignup />} />
                <Route path="/userlogin" element={<UserLogin />} />
                <Route path="/adminhomepage" element={<AdminHomePage/>}/>
            </Routes>
        </Router>
    );
}

export default App;