import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import admin from "../../assets/adminImage.png";
import styles from "../../Styles/AdminPage.module.css";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]); 

  useEffect(() => {
    axios.get("http://localhost:5000/admin")
      .then((res) => {
        setUsers(res.data); 
      })
      .catch((err) => {
        console.error(err);
      });
  }, []); 

  function handleLogin(e) {
    e.preventDefault();

    const userExists = users.some((user) => 
      user.username === username && user.password === password
    );

    if (userExists) {
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
        <form onSubmit={handleLogin}>
          <label>Username:</label>
          <input
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Enter the Username"
          />
          <label>Password:</label>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter the Password"
          />
          <button type="submit">Login</button>
          <span>
            Register as Admin <Link to="/adminsignup">Signup</Link>
          </span>
        </form>
      </aside>
    </div>
  );
}