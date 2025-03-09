import React, { useState } from 'react'

import AllTasks from './AllTasks'
import Completed from './Completed'

const Home = () => {
  const [title, setTitle] = useState('')
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

  const handleAddBtn = () => {
    if (title.trim() == 0) {
      alert('enter a task')
      return
    } else {
      const newTask = {
        id: tasks.length + 1,
        title: title,
        taskType: taskType,
        completed: false,
        important: false
      }
      setTasks([...tasks, newTask])
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

  const handleTaskType = event => {
    const selectedValue = event.target.value
    setTaskType(selectedValue)
    myFunction(selectedValue)
  }

  const myFunction = value => {
    console.log('Using taskType:', value)
  }

  return (
    <div className='w-full'>
      <div className='w-full bg-[#EEF6EF]   min-h-72'>
        <h1 className='border-b border-gray-300 pb-1'>
          <select
            id='task-type'
            value={taskType}
            className='w-full mt-2 p-2 outline-none cursor-pointer'
            onChange={event => handleTaskType(event)}
          >
            <option value='' disabled>
              ToDo{' '}
            </option>
            <option value='indoor'>Indoor</option>
            <option value='outdoor'>Outdoor</option>
          </select>
        </h1>
        <div className='crete_task_container px-6  py-4 w-full h-auto'>
          <div className='taskInput p-2 w-full my-0 bg-[#FFFFFF]  rounded-md '>
            {taskType === 'Outedoor' ? <h1>Hello</h1> : ''}
            <input
              type='text'
              value={title}
              onChange={handleChange}
              className='title w-full  outline-none py-3 bg-transparent border-b border-gray-300'
              placeholder='Enter a task'
            />

            {taskType === 'outdoor' ? (
              <input
                type='text'
                placeholder='Enter city name'
                className='title w-full  outline-none py-3 bg-transparent border-b border-gray-300'
              />
            ) : (
              ''
            )}
            <button
              className='mt-5 cursor-pointer py-2 px-6 rounded-sm bg-[#3da25f29] text-black hover:bg-[#35793729] hover:text-black'
              onClick={handleAddBtn}
            >
              Add
            </button>
          </div>
        </div>
      </div>

      <AllTasks
        tasks={tasks}
        toggleComplete={toggleComplete}
        toogleImportant={toogleImportant}
      />

      {/* Completed Tasks */}

      <Completed
        tasks={tasks}
        toggleComplete={toggleComplete}
        toogleImportant={toogleImportant}
      />
    </div>
  )
}

export default Home
