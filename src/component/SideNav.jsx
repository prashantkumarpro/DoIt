import React from 'react'
import { NavLink } from 'react-router'
import profilePic from '../assets/profile.jpg'
import { BiTask } from 'react-icons/bi'

const SideNav = () => {
  return (
    <aside className='w-56 h-screen px-6 py-6 '>
      <div className='part1 size-24 rounded-full flex items-center justify-center m-auto'>
        <figure className='w-28 rounded-full'>
          <img
            src={profilePic}
            alt='user profile pic'
            className='size-full rounded-full block m-auto object-fit'
          />
        </figure>
      </div>
      <ul className='mt-6 mx-6 px-6 h-screen flex flex-col gap-3 bg-[#EEF6EF]'>
        <li>
          {' '}
          <NavLink to='/'>
            {' '}
            <BiTask /> All Tasks
          </NavLink>{' '}
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
