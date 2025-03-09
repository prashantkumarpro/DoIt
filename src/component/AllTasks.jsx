import React from 'react'
import { FaCheckSquare, FaRegSquare, FaRegStar, FaStar } from 'react-icons/fa'
const AllTasks = ({ tasks, toggleComplete, toogleImportant }) => {
  return (
    <div className='w-full'>
      {/* Task List */}
      {tasks ? (
        <ul className='mt-4 space-y-3'>
          {tasks
            ?.filter(task => !task.completed)
            .reverse()
            .map(task => (
              <li
                key={task.id}
                className='flex justify-between py-4 px-5 border-b border-[#496E4B33]'
              >
                <div className='flex items-center space-x-6'>
                  <button
                    onClick={() => toggleComplete(task.id)}
                    className='cursor-pointer'
                  >
                    {task.completed ? (
                      <FaCheckSquare className='text-xl' />
                    ) : (
                      <FaRegSquare className='text-xl' />
                    )}
                  </button>
                  <span>{task.title}</span>
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
      ) : (
        <div className='w-full bg-[#EEF6EF] flex items-center justify-center  min-h-72'>
          <h1 className='m-auto p-5 text-3xl'>
            There are not tasks available.For now this page is under
            maintenance. Developer is working hard for this feature. Please see
            all task in Home page.
          </h1>
        </div>
      )}
    </div>
  )
}

export default AllTasks
