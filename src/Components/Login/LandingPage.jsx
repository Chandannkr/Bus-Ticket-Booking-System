import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/LandingPage.css";

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <h1>Welcome To Bus Ticket Booking System</h1>
      <p>
        This is a simple Bus Ticket Booking System. You can login as an Admin or User.
      </p>
      <div className="container">
        <Link to="/adminlogin">Admin Login/SignUp</Link> <br />
        <Link to="/userlogin">User Login/SignUp</Link>
      </div>

      <div className="content">
        <div className="scrolling-text">
          <h1>India's No. 1 Online Bus Ticket Booking Site</h1>
        </div>
        <p>
          Book bus tickets online from the largest bus ticket booking site with the best bus operators. Book your bus ticket now!
        </p>

        <div className="container">
          <form className="search_container">
            <div className="search_box">
              <input type="text" placeholder="Source" />
              <input type="text" placeholder="Destination" />
              <div className="date_container">
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
