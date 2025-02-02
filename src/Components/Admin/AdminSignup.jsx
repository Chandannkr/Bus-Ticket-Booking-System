import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../Styles/AdminPage.module.css"; // Import CSS Module

export default function AdminSignup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSignup(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Account Created Successfully");
  }

  return (
    <div className={styles.adminSignup}>
      <aside className={styles.signupForm}>
        <h2>Admin Signup</h2>
        <form>
          <label>Username :</label>
          <input
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Enter Username"
          />

          <label>Email :</label>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter Email"
          />

          <label>Password :</label>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Password"
          />

          <label>Confirm Password :</label>
          <input
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm Password"
          />

          <button onClick={handleSignup}>Signup</button>

          <span>
            Already have an account? <Link to="/adminlogin">Login</Link>
          </span>
        </form>
      </aside>
    </div>
  );
}
