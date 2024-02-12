import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Nav/Navbar';

function JobHistory() {
  return (
    <div className='wrapper'>
        <Sidebar />
        <div className="dashboard-content">
            <Navbar liName="Job history"/>
        </div>
    </div>
  )
}

export default JobHistory