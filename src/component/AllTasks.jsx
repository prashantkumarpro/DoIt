import { FaCheckSquare, FaRegSquare, FaRegStar, FaStar } from 'react-icons/fa'
const AllTasks = ({
  getTasks,
  toggleComplete,
  toogleImportant,
  weatherInfo
}) => {
  return (
    <div className='w-full'>
      {getTasks ? (
        <ul className='mt-4 space-y-3'>
          {getTasks
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
                <div>
                  {task.taskType === 'outdoor' && weatherInfo && (
                    <div>
                      <p>
                        {weatherInfo.current.temp_c}°C{' '}
                        <span>{weatherInfo.current.condition.text}</span>
                      </p>
                    </div>
                  )}
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
          <p>No tasks available</p>
        </div>
      )}
    </div>
  )
}

export default AllTasks
