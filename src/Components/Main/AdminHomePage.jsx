import React from "react";
import Header from "../../Components/Main/Header";
import AdminSideBar from "../../Styles/AdminSideBar.css";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../../Components/Main/AdminDashboard";
import AddBus from "../../Components/Main/AddBus";

const AdminHomePage = () => {
  return (
    <div className="AdminHomePage">
      <Header />
      <section>
        <aside className="side_content">
          <AdminSideBar />
        </aside>
        <aside className="content">
          <Routes>
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/addbus" element={<AddBus />} />
          </Routes>
        </aside>
      </section>
    </div>
  );
};

export default AdminHomePage;