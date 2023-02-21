import React from 'react'
import { Link } from  "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
   <div className='nav-header'>
  
 
        <h1>PORTFOLIO</h1>
   
   
    <div className='ul-main'>
    <ul  className='nav-menu'>
        <l1>
            <Link to = "/">Home</Link>
            
        </l1>
       
     
        <l1>
            <Link to = "/project">Project</Link>
            
        </l1>
        <l1>
            <Link to = "/about">About</Link>
            
        </l1>
        <l1>
            <Link to = "/contact">Contact</Link>
            
        </l1>
        <l1>
            <Link to = "/Resume">Resume</Link>
            
        </l1>
       
    </ul>
    </div>
   



   </div>
  )
}

export default Navbar