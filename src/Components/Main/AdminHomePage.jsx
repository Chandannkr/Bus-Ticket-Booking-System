import React from 'react';
import Header from '../../Components/Main/Header'
import AdminSideBar from '../../Styles/AdminSideBar.css'

const AdminHomePage = () => {
    return (
        <div>
            {/* <h1>Welcome to the Admin Home Page</h1>
            <p>This is the admin section of the cart app.</p> */}
            <Header/>
            <section>
                <aside className='side_content'>
                <AdminSideBar/>
                </aside>
                <aside className='content'>Content</aside>
            </section>
        </div>
    );
};

export default AdminHomePage;