import React from 'react'
import { FaCheckSquare, FaRegSquare, FaRegStar, FaStar } from 'react-icons/fa'
const Completed = ({ tasks, toggleComplete, toogleImportant }) => {
  
  return (
    <div>
      <h3 className='mt-6 font-semibold border-b border-gray-300 py-5'>
        Completed
      </h3>
      <ul className='mt-2 space-y-2'>
        {tasks
          .filter(task => task.completed)
          .map(task => (
            <li
              key={task.id}
              className='flex justify-between py-4 px-5 border-b border-[#496E4B33] '
            >
              <div className='flex items-center space-x-6'>
                <button
                  onClick={() => toggleComplete(task.id)}
                  className='cursor-pointer'
                >
                  {task.completed ? (
                    <FaCheckSquare className='text-xl text-green-500' />
                  ) : (
                    <FaRegSquare className='text-xl' />
                  )}
                </button>
                <span className={`${task.completed ? 'line-through' : ''}`}>
                  {task.title}
                </span>
              </div>
              <button
                className='cursor-pointer'
                onClick={() => toogleImportant(task.id)}
              >
                {task.important ? (
                  <FaStar className='text-slate-500 text-xl' />
                ) : (
                  <FaRegStar className='text-xl' />
                )}
              </button>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Completed
