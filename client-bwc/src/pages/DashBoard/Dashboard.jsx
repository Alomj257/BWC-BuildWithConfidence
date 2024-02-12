import React from 'react';
import './Dashboard.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Nav/Navbar';
import backgroundImage from '../../assests/banner/b.png';

function Dashboard() {
    return (
        <div className='wrapper'>
            <Sidebar />
            <div className="dashboard-content">
                <Navbar liName="Dashboard" />
                <div className="dashboard-heading mb-5">
                    <h2>Welcome to BWC ecosystem! <span style={{ color: 'gold' }}>&#9733;&#9733;&#9733;&#9733;&#9733;</span></h2>
                </div>
                <div className="dashboard-banner" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="banner-text">
                        <h3>Let's create your first job.</h3>
                        <p>Click 'tradeperson' to access our vetted tradeperson nearby</p>
                        <p>Click 'start now' if you already choosen a tradeperson</p>
                        <button className="banner-button tradeperson">Trade Person</button>
                        <button className="banner-button start-now">Start Now</button>
                    </div>
                </div>
                <div className="dashboard-box">
                    <div className="box">
                        <h3>Financial Summary</h3>
                    </div>
                    <div className="box">
                        <h3>Create a Signature</h3>
                    </div>
                    <div className="box">
                        <h3>Membership</h3>
                    </div>
                    <div className="box">
                        <h3>Live Jobs</h3>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Dashboard;
