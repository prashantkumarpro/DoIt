
import React from 'react'
import { CiGrid41 } from 'react-icons/ci'
import { IoMenuOutline, IoSearchOutline } from 'react-icons/io5'
import { PiMoonStarsBold } from 'react-icons/pi'
import { RiTodoLine } from 'react-icons/ri'
import { Link } from 'react-router'

const Header = () => {
  return (
    <>
      <header className='bg-[#FBFDFC] m-auto w-full max-w-[1344px] h-[56px] flex justify-between items-center px-6 border-b border-gray-300 fixed top-0 left-0 z-50'>
        <div className='flex gap-6 items-center'>
          <Link>
            {' '}
            <IoMenuOutline className='size-6' />
          </Link>
          <h3 className='text-[#3F9142] text-xl flex items-center justify-center gap-0.5'>
            <RiTodoLine className='size-6' />
            DoIt{' '}
          </h3>
        </div>
        <nav className=''>
          <ul className='flex items-center justify-center gap-6'>
            <li>
              <Link>
                <IoSearchOutline className='size-6' />
              </Link>
            </li>
            <li>
              <Link>
                {' '}
                <CiGrid41 className='size-6' />
              </Link>
            </li>
            <li>
              {' '}
              <Link>
                {' '}
                <PiMoonStarsBold className='size-6' />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
