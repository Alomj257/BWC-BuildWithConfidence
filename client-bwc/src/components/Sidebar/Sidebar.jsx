import React from 'react';
import './Sidebar.css';
import image from '../../assests/profile/P1.png'

function Sidebar() {
    return (
        <div className="sidebar close">
            <div className="logo-details">
                <i class='bx bx-buildings'></i>
                <span className="logo_name">BWC</span>
            </div>
            <ul className="nav-links">
                <li>
                    <a href="#">
                        <i class='bx bx-grid-alt'></i>
                        <span className="link_name">Dashboard</span>
                    </a>
                    <ul className="sub-menu">
                        <li><a className='link_name blank' href="#">Dashboard</a></li>
                    </ul>
                </li>
                <li>
                    <div className="icon-link">
                        <a href="#">
                            <i class='bx bx-user-pin'></i>
                            <span className="link_name">Tradeperson</span>
                            <i class='bx bxs-chevron-down arrow'></i>
                        </a>
                    </div>
                    <ul className="sub-menu">
                        <li><a className='link_name' href="#">Tradeperson</a></li>
                        <li><a href="#">Person one</a></li>
                        <li><a href="#">Person two</a></li>
                        <li><a href="#">Person three</a></li>
                    </ul>
                </li>
                <li>
                    <div className="icon-link">
                        <a href="#">
                            <i class='bx bx-select-multiple'></i>
                            <span className="link_name">Create job</span>
                            <i class='bx bxs-chevron-down arrow'></i>
                        </a>
                    </div>
                    <ul className="sub-menu">
                        <li><a className='link_name' href="#">Create job</a></li>
                        <li><a href="#">Job one</a></li>
                        <li><a href="#">Job two</a></li>
                        <li><a href="#">Job three</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">
                        <i class='bx bx-history' ></i>
                        <span className="link_name">Job history</span>
                    </a>
                    <ul className="sub-menu">
                        <li><a className='link_name blank' href="#">Job history</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">
                        <i class='bx bx-bell'></i>
                        <span className="link_name">Suppliers</span>
                    </a>
                    <ul className="sub-menu">
                        <li><a className='link_name blank' href="#">Suppliers</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">
                        <i class='bx bx-message-rounded-dots'></i>
                        <span className="link_name">Message</span>
                    </a>
                    <ul className="sub-menu">
                        <li><a className='link_name blank' href="#">Message</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">
                        <i class='bx bx-envelope' ></i>
                        <span className="link_name">Insurances</span>
                    </a>
                    <ul className="sub-menu">
                        <li><a className='link_name blank' href="#">Insurances</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">
                        <i class='bx bx-cog' ></i>
                        <span className="link_name">Settings</span>
                    </a>
                    <ul className="sub-menu">
                        <li><a className='link_name blank' href="#">Settings</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">
                        <i class='bx bx-help-circle' ></i>
                        <span className="link_name">Helo & Support</span>
                    </a>
                    <ul className="sub-menu">
                        <li><a className='link_name blank' href="#">Helo & Support</a></li>
                    </ul>
                </li>
                <li>
                <div className="profile-details">
                    <div className="profile-content">
                        <img src={image} alt="profile" />
                    </div>

                    <div className="name-job">
                        <div className="profile_name">Jahangir Alom</div>
                        <div className="job">Consumer</div>
                    </div>
                    <i class='bx bx-log-out'></i>

                </div>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
