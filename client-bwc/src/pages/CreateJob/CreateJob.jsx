import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Nav/Navbar';

function CreateJob() {
  return (
    <div className='wrapper'>
        <Sidebar />
        <div className="dashboard-content">
            <Navbar liName="Create a job"/>
        </div>
    </div>
  )
}

export default CreateJob