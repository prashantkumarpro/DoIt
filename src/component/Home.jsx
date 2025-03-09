import React, { useState } from 'react'
import { FaCheckSquare, FaRegSquare, FaRegStar, FaStar } from 'react-icons/fa'

const Home = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [taskType, setTaskType] = useState('')

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Go to market',
      text: 'Buy groceries',
      completed: false,
      important: false
    },
    {
      id: 2,
      title: 'Finsh the assignments',
      text: 'Finish project report',
      completed: false,
      important: true
    },
    {
      id: 3,
      title: 'Call the bank',
      text: 'Call the bank',
      completed: false,
      important: false
    },
    {
      id: 4,
      title: 'Schedule the appoinment',
      text: 'Schedule dentist appointment',
      completed: false,
      important: false
    },
    {
      id: 5,
      title: 'Make a plan',
      text: 'Plan weekend trip',
      completed: true,
      important: false
    }
  ])

  const handleChange = e => setTitle(e.target.value)
  const handleNote = e => setNote(e.target.value)

  const handleAddBtn = () => {
    if (title.trim() == 0 || note.trim() == 0) {
      alert('enter both title and text')
      return
    } else {
      const newTask = {
        id: tasks.length + 1,
        title: title,
        text: note,
        taskType: taskType,
        completed: false,
        important: false
      }
      setTasks([...tasks, newTask])
      setNote('')
      setTitle('')
    }
  }

  const toggleComplete = taskId => {
    setTasks(prevTask =>
      prevTask.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const toogleImportant = taskId => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, important: !task.important } : task
      )
    )
  }

  return (
    <div className='w-full'>
      <div className='w-full bg-[#EEF6EF]   min-h-72'>
        <h1 className='border-b border-gray-300 pb-1'>
          <select
            id='task-type'
            className='w-full mt-2 p-2 outline-none cursor-pointer'
            onChange={event => setTaskType(event.target.value)}
          >
            <option value='' defaultValue={''} >
              ToDo{' '}
            </option>
            <option value='indoor'>Indoor</option>
            <option value='outdoor'>Outdoor</option>
          </select>
        </h1>
        <div className='crete_task_container px-6  py-4 w-full h-auto'>
          <div className='taskInput p-2 w-full my-0 bg-[#FFFFFF]  rounded-md '>
            <input
              type='text'
              value={title}
              onChange={handleChange}
              className='title w-full border-[none] outline-none py-2 bg-transparent'
              placeholder='Title'
            />
            <textarea
              name='note'
              value={note}
              onChange={handleNote}
              className='w-full bg-transparent h-auto outline-none overflow-auto -scroll-ml-56'
              placeholder='Take a notes'
            ></textarea>

            <button
              className='cursor-pointer py-2 px-6 rounded-sm bg-[#3da25f29] text-black hover:bg-[#35793729] hover:text-black'
              onClick={handleAddBtn}
            >
              Add
            </button>
          </div>
        </div>
      </div>

      {/* Task List */}
      <ul className='mt-4 space-y-3'>
        {tasks
          .filter(task => !task.completed)
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

      {/* Completed Tasks */}
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

export default Home
