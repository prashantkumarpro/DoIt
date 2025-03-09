import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './component/Home'
import Layout from './component/Layout'
import AllTasks from './component/AllTasks'

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='allTasks' element={<AllTasks />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
