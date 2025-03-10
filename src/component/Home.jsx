import React, { useEffect, useState } from 'react'

import AllTasks from './AllTasks'
import Completed from './Completed'

const Home = () => {
  const [title, setTitle] = useState('')
  const [taskType, setTaskType] = useState('')
  const [cityName, setCityName] = useState('')
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
  const [weatherInfo, setWeatherInfo] = useState(null)
  const handleChange = e => setTitle(e.target.value)
  const handleTaskType = event => setTaskType(event.target.value)

  const handleAddBtn = () => {
    if (title.trim() == 0) {
      alert('enter a task')
      return
    } else {
      const newTask = {
        id: tasks.length + 1,
        title: title,
        taskType: taskType,
        cityName: cityName,
        completed: false,
        important: false
      }
      setTasks([...tasks, newTask])
      setTitle('')
      setCityName('')
    }
  }

  const fetchedData = async city => {
    if (!city.trim()) return

    const api_key = 'be4b4668ddf24842860111301251003'
    let userCity = city.charAt(0).toUpperCase() + city.slice(1)

    try {
      const res = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${userCity}&aqi=no`
      )

      if (!res.ok) throw new Error('failed to fetch data')

      const data = await res.json()
      setWeatherInfo(data)
      console.log(data)
    } catch (error) {
      console.error('Error fetching weather data:', error)
    }
  }

  useEffect(() => {
    if (!cityName.trim()) return

    const timeoutId = setTimeout(() => {
      fetchedData(cityName)
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [cityName])

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
                value={cityName}
                onChange={e => setCityName(e.target.value)}
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
        weatherInfo={weatherInfo}
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
