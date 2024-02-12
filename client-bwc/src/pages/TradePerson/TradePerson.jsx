import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Nav/Navbar';

function TradePerson() {
  return (
    <div className='wrapper'>
        <Sidebar />
        <div className="dashboard-content">
            <Navbar liName="Tradeperson"/>
        </div>
    </div>
  )
}

export default TradePerson