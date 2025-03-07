import React from 'react'
import { NavLink } from 'react-router'

const SideNav = () => {
  return (
    <aside className='w-56 h-screen px-6 py-6'>
      <div className='part1 size-24 bg-black rounded-full flex items-center justify-center m-auto'>
        <figure className='w-24 bg-amber-950 rounded-full'>
          <figcaption>HI, ABCD</figcaption>
        </figure>
      </div>
      <ul className='mt-6 mx-6 px-6 h-screen flex flex-col gap-3 bg-[#EEF6EF]'>
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
    </aside>
  )
}

export default SideNav
