import React from 'react'
import SideBar from '../components/SideBar'
import Header from '../components/Header'
import DataArea from '../components/DataArea'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Ecommerce from './Ecommerce'

const Dashboard = () => {

  const toggleSidebar = useSelector((state) => state.toggle.value)

  return (
    <div className={`dashboard ${toggleSidebar ? "responsive-sidebar" : ""}`}>

      <div className={`sidebar`}>
        <SideBar />
      </div>

      <div className="right-side">
        <div className="header">
          <Header />
        </div>
        <div className="data-area main-body">
          <Outlet />
        </div>
      </div>


    </div>
  )
}

export default Dashboard