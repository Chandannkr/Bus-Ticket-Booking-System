import React from 'react'
import '../../Styles/AdminSideBar.css'
import { NavLink } from 'react-router-dom'

const AdminSideBar = () => {
  return (
    <div className='AdminSideBar'>
      <NavLink to='/adminhomepage/dashboard'>Dashboard</NavLink>
      <NavLink to='/adminhomepage/Addbus'>Dashboard</NavLink>
      <NavLink to='/'>Logout</NavLink>
    </div>
  )
}

export default AdminSideBar