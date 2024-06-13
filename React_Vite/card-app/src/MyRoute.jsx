import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProjectDetail from './Component/ProjectDetail'
import App from './App'

const MyRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/donate' element={<ProjectDetail/>}/>
      </Routes>
  )
}

export default MyRoute