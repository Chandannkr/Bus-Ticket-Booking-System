import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

// Lazy load components
const LandingPage = lazy(() => import("./components/Login/LandingPage"));
const AdminLogin = lazy(() => import("./components/Admin/AdminLogin"));
const AdminSignup = lazy(() => import("./components/Admin/AdminSignup"));
const UserLogin = lazy(() => import("./components/User/UserLogin"));
const AdminHomePage = lazy(() => import("./components/Main/AdminHomePage"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/adminsignup" element={<AdminSignup />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/adminhomepage" element={<AdminHomePage />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </Router>
  );
}

export default App;
