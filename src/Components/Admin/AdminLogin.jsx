import React, { useState } from "react";
import admin from "../../assets/adminImage.png";
import { Link } from "react-router-dom";
import "../../Styles/AdminLogin.css"; 

export default function AdminLogin() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  function login() {
    if (username === "abcd" && password === "1234") {
      alert("Login Successful");
    } else {
      alert("Login Failed");
    }
  }

  return (
    <div className="AdminLogin">
      <aside className="admin_sideImage">
        <img src={admin} alt="Admin" />
      </aside>
      <aside className="admin_form">
        <form action="">
          <label>Username :</label>
          <input
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Enter the Username"
          />
          <label>Password :</label>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter the Password"
          />
          <button onClick={(e) => { e.preventDefault(); login(); }}>
            Login
          </button>
          <span>
            Register as Admin <Link to="/adminsignup">Signup</Link>
          </span>
        </form>
      </aside>
    </div>
  );
}