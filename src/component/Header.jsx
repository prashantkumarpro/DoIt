import React from 'react'
import { NavLink } from 'react-router'

const Header = () => {
  return (
    <>
      <header>
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
