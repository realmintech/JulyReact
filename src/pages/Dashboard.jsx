import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <div>
          {/* sidebar */}
          <Sidebar />
        </div>
        <div>
          {/* Outlet */}
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Dashboard