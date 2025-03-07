import React from 'react'
import { NavLink } from 'react-router'

const SideNav = () => {
  return (
    <aside>
      <h3>DoIt</h3>
      <nav>
        <ul>
          <li>
            {' '}
            <NavLink to='/'>All Tasks</NavLink>{' '}
          </li>
          <li>
            {' '}
            <NavLink to='/'>Today</NavLink>{' '}
          </li>
          <li>
            {' '}
            <NavLink to='/'>Today</NavLink>{' '}
          </li>
          <li>
            {' '}
            <NavLink to='/'>Today</NavLink>{' '}
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default SideNav
