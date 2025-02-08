import React, { useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import Header from "../../Components/Main/Header";
import "../../Styles/AdminSideBar.css";  
import AdminDashboard from "../../Components/Main/AdminDashboard";
import AddBus from "../../Components/Main/AddBus";
import AdminSideBar from "../../Components/Main/AdminSideBar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminHomePage = () => {
  let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      toast.warning("Please log in first!");
      setTimeout(() => navigate("/AdminLogin"), 2000);
    }
  }, [navigate]);

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    toast.info("Logged out successfully!");
    setTimeout(() => navigate("/AdminLogin"), 2000);
  }

  return (
    <div className="AdminHomePage">
      <ToastContainer position="top-center" autoClose={2000} />
      <Header />
      <button onClick={handleLogout}>Logout</button>
      <section>
        <aside className="side_content">
          {/* AdminSidebar should be used as a regular component */}
          <AdminSideBar />
        </aside>
        <aside className="content">
          <Routes>
            <Route path="/" element={<AdminDashboard />} /> {/* Default route */}
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/addbus" element={<AddBus />} />
          </Routes>
        </aside>
      </section>
    </div>
  );
};

export default AdminHomePage;