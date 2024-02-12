import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="logo-details">
            <i class='bx bxl-bitcoin icon'></i>
                <div className="logo_name">BWC</div>
                <i className={`bx ${isOpen ? 'bx-menu-alt-right' : 'bx-menu'}`} id="btn" onClick={toggleSidebar}></i>
            </div>
            <ul className="nav-list">
                {/* <li>
                    <i className='bx bx-search'></i>
                    <input type="text" placeholder="Search..." />
                    <span className="tooltip">Search</span>
                </li> */}
                <li>
                    <a href="/">
                        <i className='bx bx-grid-alt'></i>
                        <span className="links_name">Dashboard</span>
                    </a>
                    <span className="tooltip">Dashboard</span>
                </li>
                <li>
                    <a href="/tradeperson">
                    <i class='bx bx-user-pin'></i>
                        <span className="links_name">Tradeperson</span>
                    </a>
                    <span className="tooltip">Tradeperson</span>
                </li>
                <li>
                    <a href="/create-job">
                    <i class='bx bx-select-multiple'></i>
                        <span className="links_name">Create a job</span>
                    </a>
                    <span className="tooltip">Create a job</span>
                </li>
                <li>
                    <a href="/job-history">
                    <i class='bx bx-history' ></i>
                        <span className="links_name">Job history</span>
                    </a>
                    <span className="tooltip">Job history</span>
                </li>
                <li>
                    <a href="/">
                    <i class='bx bx-bell'></i>
                        <span className="links_name">Suppliers</span>
                    </a>
                    <span className="tooltip">Suppliers</span>
                </li>
                <li>
                    <a href="/">
                    <i class='bx bx-message-rounded-dots'></i>
                        <span className="links_name">Message</span>
                    </a>
                    <span className="tooltip">Message</span>
                </li>
                <li>
                    <a href="/">
                    <i class='bx bx-envelope' ></i>
                        <span className="links_name">Insurance</span>
                    </a>
                    <span className="tooltip">Insurance</span>
                </li>
                <li>
                    <a href="/">
                        <i className='bx bx-cog'></i>
                        <span className="links_name">Setting</span>
                    </a>
                    <span className="tooltip">Setting</span>
                </li>
                <li>
                    <a href="/">
                    <i class='bx bx-help-circle' ></i>
                        <span className="links_name">Help & Support</span>
                    </a>
                    <span className="tooltip">Help & Support</span>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
