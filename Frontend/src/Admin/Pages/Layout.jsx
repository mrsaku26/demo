import React from 'react'
import './Layout.css'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Navbar/>
     <div className="lay">
       <Sidebar/>
      <Outlet/>
     </div>
    </div>
  )
}

export default Layout
