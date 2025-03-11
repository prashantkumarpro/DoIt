import React, { useState } from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import SideNav from './SideNav'

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  

  return (
    <div>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className='flex items-start mt-16 py-6  gap-5'>
        <SideNav isMenuOpen={isMenuOpen} />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
