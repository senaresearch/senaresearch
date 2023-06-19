import React from 'react'
import DashbordNavbar from './DashbordNavbar'
import SideMenu from './SideMenu';
import { Outlet } from 'react-router-dom'
import { DahsboardProvider } from './DashboardContext';

const Dashboard = () => {
  return (
    <div className='h-screen'>
      <DahsboardProvider>
        <DashbordNavbar/>
        <SideMenu />
      </DahsboardProvider>
    </div>
  )
}

export default Dashboard