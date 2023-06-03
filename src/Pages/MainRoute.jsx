import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './HomePage'
import Login from './Login'
import Admin from './Admin'

const MainRoute = () => {
  return (
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/login" element={<Login/>}/>

    <Route path="/add" element={<Admin/>}/>

    <Route path="*" element={<h2>404 Page not  Found</h2>}/>

   </Routes>
  )
}

export default MainRoute
