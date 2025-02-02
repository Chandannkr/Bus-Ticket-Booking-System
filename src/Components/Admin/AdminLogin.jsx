import React, { useState } from "react";
import admin from "../../assets/adminImage.png";
import { Link } from "react-router-dom";
import styles from "../../Styles/AdminPage.module.css"; // Import CSS Module

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    if (username === "abcd" && password === "1234") {
      alert("Login Successful");
    } else {
      alert("Login Failed");
    }
  }

  return (
    <div className={styles.adminLogin}>
      <aside className={styles.adminSideImage}>
        <img src={admin} alt="Admin" />
      </aside>
      <aside className={styles.adminForm}>
        <form>
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
