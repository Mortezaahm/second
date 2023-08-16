import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <NavLink
        className ={({isActive}) => isActive ? 'active link' : ''}
      to="/">Home</NavLink>
      <NavLink
        className ={({isActive}) => isActive ? 'active link' : ''}
      to="/about">About</NavLink>
      <NavLink 
        className ={({isActive}) => isActive ? 'active link' : ''}
      to="/products">Products</NavLink>
      <NavLink 
        className ={({isActive}) => isActive ? 'active link' : ''}
      to="/login">Login</NavLink>
    </nav>
  )
}

export default Navbar
