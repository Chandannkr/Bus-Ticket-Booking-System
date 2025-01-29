import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/Login/LandingPage";
import AdminLogin from "./Components/Admin/AdminLogin";
import UserLogin from "./Components/User/UserLogin";
import MainImage from "../src/assets/img.png"
import "./App.css";

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/adminlogin" element={<AdminLogin />} />
                    <Route path="/userlogin" element={<UserLogin />} />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;