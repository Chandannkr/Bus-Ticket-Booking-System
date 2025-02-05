import React from 'react';
import Header from '../../Components/Main/Header'
import AdminSideBar from 'C:\Users\HP\Desktop\cart-app\src\Styles\AdminSideBar.css'

const AdminHomePage = () => {
    return (
        <div>
            <h1>Welcome to the Admin Home Page</h1>
            <p>This is the admin section of the cart app.</p>
            <Header/>
            <AdminSideBar/>
        </div>
    );
};

export default AdminHomePage;