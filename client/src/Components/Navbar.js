import React from 'react'
import NavHeaderImage from '../Assets/Group-2609047.png'
import Vector from '../Assets/Vector.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className="navbar bg-navbar-background h-20 w-full text-white flex flex-row justify-between align-middle items-center px-5">
        <Link to={'/home'}><img src= {NavHeaderImage} alt="LOGO"  className=' h-8'/></Link>
        <img src= {Vector} alt="LOGO" className='h-10' />
        </div>
    </div>
  )
}

export default Navbar