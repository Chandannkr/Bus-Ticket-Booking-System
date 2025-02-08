import React from 'react'
import { Link } from 'react-router-dom'
import admin from '../../Assets/admin.png'
import user from '../../Assets/user.png'
// import '../../Styles/LandingPage.module.css'
import styles from '../../Styles/LandingPage.module.css'



export default function LandingPage() {


  return (
    <div className={styles.LandingPage}>
      <Link state={{name : "abcd" ,password : "1234"}} className={styles.anchor} to="/adminlogin">
        <img className={styles.adminImage} src={admin} alt="" />
        <br />
        <span >Admin Login</span>
      </Link>
      <Link className={styles.anchor} to="/userlogin">
        <img className={styles.userImage} src={user} alt="" />
        <br />
        <span >User Login</span>
      </Link>
    </div>
  )
}
