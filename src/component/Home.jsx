import React, { useState } from 'react'
import { FaCheckSquare, FaRegSquare, FaRegStar, FaStar } from 'react-icons/fa'

const Home = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [taskType, setTaskType] = useState('')
  // const { addTask } = useContext(toDoesContext)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Go',
      text: 'Buy groceries',
      completed: false,
      important: false
    },
    {
      id: 2,
      title: 'Go',
      text: 'Finish project report',
      completed: false,
      important: true
    },
    {
      id: 3,
      title: 'Go',
      text: 'Call the bank',
      completed: false,
      important: false
    },
    {
      id: 4,
      title: 'Go',
      text: 'Schedule dentist appointment',
      completed: false,
      important: false
    },
    {
      id: 5,
      title: 'Go',
      text: 'Plan weekend trip',
      completed: false,
      important: false
    }
  ])
  console.log(tasks)

  const completedTasks = [
    'Read a book',
    'Clean the house',
    'Prepare presentation',
    'Update blog'
  ]

  const handleChange = e => {
    setTitle(e.target.value)
  }

  const handleNote = e => {
    setNote(e.target.value)
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
    }
  }

  const handleAddBtn = () => {
    if (title.trim() == 0 || note.trim() == 0) {
      alert('enter both title and text')
      return
    } else {
      // addTask(title, text)
      tasks.push({ title: title, text: note, taskType: taskType })
      setNote('')
      setTitle('')
      console.log(tasks)
    }
  }

  const taskTypeHandler = event => {
    setTaskType(event.target.value)
  }

  return (
    <div className='w-full'>
      <div className='w-full bg-[#EEF6EF]   min-h-72'>
        <h1 className='border-b border-gray-300 pb-1'>
          ToDo{' '}
          <select id='task-type' onChange={taskTypeHandler}>
            <option value='indoor' disabled></option>
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
              onKeyDown={handleKeyDown}
            />
            <textarea
              name='note'
              value={note}
              onChange={handleNote}
              className='w-full bg-transparent h-auto outline-none overflow-auto -scroll-ml-56'
              placeholder='Take a notes'
            ></textarea>
            {/* <Save title={title} note={note} onSave={handleSave} /> */}
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
        {tasks.reverse().map((task, index) => (
          <li
            key={index}
            className='flex justify-between py-4 px-5 border-b border-[#496E4B33]'
          >
            <div className='flex items-center space-x-6'>
              {task.completed ? (
                <FaCheckSquare className='text-xl' />
              ) : (
                <FaRegSquare className='text-xl' />
              )}
              <span>{task.text}</span>
            </div>
            <button>
              {task.important ? (
                <FaStar className='text-yellow-500 text-xl' />
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
        {completedTasks.map((task, index) => (
          <li
            key={index}
            className='flex justify-between py-4 px-5 border-b border-[#496E4B33] '
          >
            <div className='flex items-center space-x-5'>
              <FaCheckSquare className='text-green-500 text-xl' />
              <span
                style={{
                  textDecoration: 'line-through'
                }}
              >
                {task}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
