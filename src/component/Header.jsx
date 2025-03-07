import React from 'react'
import { NavLink } from 'react-router'

const Header = () => {
  return (
    <>
      <header className='bg-[#FBFDFC] m-auto w-full max-w-[1344px] h-[56px] flex justify-between items-center px-6 border-b border-gray-300'>
        <h3>DoIt</h3>
        <nav>
          <ul>
            <li>
              {' '}
              <NavLink to='/'>Search here</NavLink>{' '}
            </li>
            <li>
              {' '}
              <NavLink to='/allTasks'>AllTask</NavLink>{' '}
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
