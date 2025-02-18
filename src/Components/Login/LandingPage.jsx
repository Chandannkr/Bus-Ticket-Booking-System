import React from "react";
import { Link } from "react-router-dom";
import styles from "../../Styles/LandingPage.module.css";

export default function LandingPage() {
  const setDate = (daysFromToday) => {
    const today = new Date();
    today.setDate(today.getDate() + daysFromToday);
    document.querySelector('input[type="date"]').value = today.toISOString().split("T")[0];
  };

  return (
    <div className={styles.LandingPage}>
      <h1>Welcome To Bus Ticket Booking System</h1>
      <p>
        This is a simple Bus Ticket Booking System. You can login as an Admin or User.
      </p>
      <div className={styles.loginLinks}>
        <Link to="/adminlogin" className={styles.loginButton}>Admin Login/SignUp</Link>
        <Link to="/userlogin" className={styles.loginButton}>User Login/SignUp</Link>
      </div>

      <div className={styles.content}>
        <div className={styles.scrollingText}>
          <h1>India's No. 1 Online Bus Ticket Booking Site</h1>
        </div>
        <p>
          Book bus tickets online from the largest bus ticket booking site with the best bus operators. Book your bus ticket now!
        </p>

        <div className={styles.container}>
          <form className={styles.search_container}>
            <div className={styles.search_box}>
              <input type="text" placeholder="Source" name="source" />
              <input type="text" placeholder="Destination" name="destination" />
              <div className={styles.date_container}>
                <input type="date" name="date" />
                <button type="button" onClick={() => setDate(0)}>Today</button>
                <button type="button" onClick={() => setDate(1)}>Tomorrow</button>
              </div>
              <Link to="/search-results" className={styles.searchButton}>Search</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
