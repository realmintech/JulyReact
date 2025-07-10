import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <h1>Navbar is here</h1>
    {/* <a href="/">Home</a>
    <a href="/about">About</a> */}
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    
    </>
  )
}

export default Navbar