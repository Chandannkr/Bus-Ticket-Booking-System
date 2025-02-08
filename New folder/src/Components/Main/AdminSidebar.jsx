import React from 'react'
import '../../Styles/AdminSidebar.css'
import { NavLink } from 'react-router-dom'

const AdminSidebar = () => {
    
  return (
    <div className='AdminSidebar'>
      <NavLink  to='/adminhomepage/dashboard'>
      Dashboard</NavLink>
      <NavLink  to='/adminhomepage/addbus'>
      Add Bus</NavLink>
      <NavLink to='/'>Logout</NavLink>
      
    </div>
  )
}

export default AdminSidebar