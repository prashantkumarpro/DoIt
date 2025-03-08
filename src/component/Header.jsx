import {
  RiGridFill,
  RiMenuFill,
  RiMoonLine,
  RiSearchLine,
  RiTodoLine
} from '@remixicon/react'
import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <>
      <header className='bg-[#FBFDFC] m-auto w-full max-w-[1344px] h-[56px] flex justify-between items-center px-6 border-b border-gray-300 fixed top-0 left-0 z-50'>
        <div className='flex gap-6 items-center'>
          <Link>
            {' '}
            <RiMenuFill className='size-6' />
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
                <RiSearchLine className='size-6' />
              </Link>
            </li>
            <li>
              <Link>
                {' '}
                <RiGridFill className='size-6' />
              </Link>
            </li>
            <li>
              {' '}
              <Link>
                {' '}
                <RiMoonLine className='size-6' />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
