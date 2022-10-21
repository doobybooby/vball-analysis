import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='flex-row justify-around'>
      <NavLink to='/home'>Home</NavLink>
      <NavLink to='/tutorials'>Tutorial</NavLink>
    </nav>
  )
}
