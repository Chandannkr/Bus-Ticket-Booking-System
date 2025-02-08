import React from 'react'
import Header from './Header'
import AdminSidebar from './AdminSidebar'
import '../../Styles/AdminHomePage.css'
import { Route, Routes } from 'react-router-dom'
import AddBus from './AddBus'
import AdminDashBoard from './AdminDashBoard'

const AdminHomePage = () => {
  return (
    <div className='AdminHomePage'>
      <Header/>
      <section>
      <aside className='side_content'>
      <AdminSidebar/>
      </aside>
      <aside className='content'>
        <Routes>
          <Route path='/dashboard' element={<AdminDashBoard/>}/>
          <Route path='/addbus' element={<AddBus/>}/>
        </Routes>
      </aside>
      </section>
    </div>
  )
}

export default AdminHomePage
