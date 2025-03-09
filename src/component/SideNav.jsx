import { Link } from 'react-router'
import profilePic from '../assets/profile.jpg'
import { BiTask } from 'react-icons/bi'
import { MdOutlineCalendarToday } from 'react-icons/md'
import { IoAdd, IoStarOutline } from 'react-icons/io5'

const sideNavLinks = [
  { name: 'All Tasks', icon: <BiTask />, active: false },
  { name: 'Today', icon: <MdOutlineCalendarToday />, active: true },
  { name: 'Important', icon: <IoStarOutline />, active: false }
]

const SideNav = ({ isMenuOpen }) => {
  return (
    <aside
      className={`${
        isMenuOpen ? 'max-w-0 px-0 overflow-hidden' : 'w-96 px-6 '
      } relative  h-screen  py-6 `}
    >
      <div className='mt-2  size-36 absolute top-8 left-1/4 text-center m-auto'>
        <img src={profilePic} alt='Profile' className='rounded-full mx-auto' />
        <p className='mt-2 font-semibold'>Hey, ABCD</p>
      </div>
      <div className='bg-[#EEF6EF] py-5 w-full h-screen p-5 mt-24'>
        <nav className='mt-24 space-y-3 bg-[#FBFDFC] px-3 py-3 '>
          {sideNavLinks.map((item, index) => (
            <div
              key={index}
              className={`flex items-center space-x-3 p-2  rounded-md cursor-pointer ${
                item.active ? 'bg-[#35793729]' : 'hover:bg-[#75cb9229]'
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </div>
          ))}
        </nav>

        <div className='space-y-3 bg-white px-3 py-3 mt-5'>
          <Link className='flex items-center space-x-3 px-2 py-5  rounded-md cursor-pointer'>
            {' '}
            <IoAdd /> <span>Add list </span>
          </Link>
        </div>
      </div>
    </aside>
  )
}

export default SideNav
