import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Tutorials } from '../Pages/Tutorials'

export const NavRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/tutorials' element={<Tutorials />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </div>
  )
}
