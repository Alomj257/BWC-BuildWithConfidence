import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Nav/Navbar';

function Layout() {
    return (
        <div className="layout">
            <Sidebar />
            <div className="content">
                <Navbar />
            </div>
        </div>
    );
}

export default Layout;
