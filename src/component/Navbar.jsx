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
        <a href="#CONNECT">Connect</a>
    </div>
  )
}

export default Navbar