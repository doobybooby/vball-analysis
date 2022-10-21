import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
      <NavLink to='/home'>Home</NavLink>
      <NavLink to='/tutorials'>Tutorial</NavLink>
    </div>
  )
}
