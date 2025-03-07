import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import SideNav from './SideNav'

const Layout = () => {
  return (
    <div>
      <Header />
      <SideNav />
      <Outlet />
    </div>
  )
}

export default Layout
