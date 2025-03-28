import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../Styles/AdminSignup.module.css";

export default function AdminSignup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignup(e) {
    e.preventDefault();
    alert("Signup Successful");
  }

  return (
    <div className={styles.adminSignup}>
      <div className={styles.signupForm}>
        <h2>Admin Signup</h2>
        <form onSubmit={handleSignup}>
          <label>Username:</label>
          <input
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Enter your Username"
          />

          <label>Email:</label>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your Email"
          />

          <label>Password:</label>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your Password"
          />

          <button type="submit">Signup</button>
          <p>
            Already have an account? <Link to="/adminlogin">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
