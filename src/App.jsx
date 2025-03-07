import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './component/Home'
import Layout from './component/Layout'
import Tasks from './component/Tasks'

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='allTasks' element={<Tasks />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
