import React from "react"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LandingPage from "./Components/Login/LandingPage";
import AdminLogin from "./Components/Admin/AdminLogin";
import UserLogin from "./Components/User/UserLogin";
import 'mdb-ui-kit/css/mdb.min.css';
import AdminSignUp from "./Components/Admin/AdminSignUp";
import { ToastContainer, toast } from 'react-toastify';
import UserSignUp from "./Components/User/UserSignUp";
import AdminHomePage from "./Components/Main/AdminHomePage";
import ErrorPage from "./Components/Main/ErrorPage";
import './App.css'
// npm i react-router-dom@6

function App(){
    return(
        <React.Fragment>
            <BrowserRouter>
            <ToastContainer />

            <Routes>
                <Route path="/*" element={<ErrorPage/>}/>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/adminlogin" element={<AdminLogin/>} />
                <Route path="/userlogin" element={<UserLogin/>} />
                <Route path="/adminsignup" element={<AdminSignUp/>}/>
                <Route path="/usersignup" element={<UserSignUp/>}/>
                <Route path="/adminhomepage/*" element={<AdminHomePage/>}/>
            </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}
export default App;