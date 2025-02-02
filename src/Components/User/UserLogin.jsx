import React from "react";
import styles from "../../Styles/UserDashboard.module.css"; 

export default function UserDashboard() {
  return (
    <div className={styles.userContainer}>
      <header className={styles.userHeader}>
        <h1>Welcome, User</h1>
      </header>

      <nav className={styles.sidebar}>
        <ul>
          <li><a href="/book-ticket">Book Ticket</a></li>
          <li><a href="/my-bookings">My Bookings</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/logout">Logout</a></li>
        </ul>
      </nav>

      <main className={styles.content}>
        <h2>Book Your Bus Ticket Easily</h2>
        <p>Find your preferred routes and book instantly.</p>
      </main>
    </div>
  );
}
