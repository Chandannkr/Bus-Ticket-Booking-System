import React, {useState} from "react";
import admin from '../../assets/adminImage.png'
import {Link} from 'react-router-dom'
import Styles from "../../Styles/AdminLogin.css"
// import {toast, ToastConatiner} from 'react-toast'


export default function AdminLogin() {
  let[username,setUsername]=useState("")
  let[password,setPassworde]=useState("")
  console.log(username, password);
  

  function login() {
    if (username==="abcd" && password==="1234") {
      alert("Login Successful")
    }
    else{
      alert("Login Failed")
    }
  }

  return (
    <div className="AdminLogin">
      <aside className="admin_sideImage">
        <img src={admin} alt="" />
      </aside>
      <aside className="admin_form">
        <form action="">
          <label htmlFor="">Username :</label>
          <input required value={username}
          onChange={(e)=>{setUsername(e.target.value)}} type="text" placeholder="Enter the Username" />
          <label htmlFor="">Password :</label>
          <input required value={password}
          onChange={(e)=>{setPassworde(e.target.value)}} type="text" placeholder="Enter the Password" />

          <button onClick={login}>Login</button>

          <span>Register as Admin <link to='/adminsignup'>Signup</link> </span>
        </form>
      </aside>
    </div>
  );
}  