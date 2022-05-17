import React from 'react'
import "./navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
        <a href='#Home_Page'><h1>LOGOBAKERY</h1></a>
        <div>
            <a href="#SERVICE">Service</a>
            <a href="#PROJECTS">Projects</a>
            <a href="#ABOUT">About</a>
        </div>
        <button>Connect</button>
    </div>
  )
}

export default Navbar