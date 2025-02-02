import React from "react";
import { Link } from "react-router-dom";
import styles from "../../Styles/LandingPage.module.css";

export default function LandingPage() {
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
              <input type="text" placeholder="Source" />
              <input type="text" placeholder="Destination" />
              <div className={styles.date_container}>
                <input type="date" />
                <button>Today</button>
                <button>Tomorrow</button>
              </div>
              <button type="button">Search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
