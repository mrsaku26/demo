import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'


const navbar = () => {
  return (
    <div className='nnavbar'>
      <Link to="/">
      <h2>E-COMMERCE</h2>
      </Link>
      <Link to="/">
      <button className='ad-btn'>Home</button>
      </Link>
    </div>
  )
}

export default navbar
