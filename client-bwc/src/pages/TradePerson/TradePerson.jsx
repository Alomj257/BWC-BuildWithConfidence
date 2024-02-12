import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Nav/Navbar';
import TradepersonProfile from '../../components/TradepersonProfile/TradepersonProfile';

function TradePerson() {
  return (
    <div className='wrapper'>
        <Sidebar />
        <div className="dashboard-content">
            <Navbar liName="Tradeperson"/>
            <TradepersonProfile />
        </div>
    </div>
  )
}

export default TradePerson