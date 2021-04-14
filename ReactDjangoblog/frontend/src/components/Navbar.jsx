import React from 'react'
import {Link} from 'react-router-dom'
import { useStateValue } from '../state/StateProvier'

const Navbar = () => {
  const [{profile},{}]= useStateValue()
  const logoutNow=()=>{
    window.localStorage.clear()
    window.location="/login"
  }
    return (
        <div className=" mb-5">

 <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
   <div className="container">
     <Link className="navbar-brand" to="/" >Social Blog</Link>

     <button
      className="navbar-toggler"
      type="button"
 
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

     <div className="collapse navbar-collapse"  >
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
      </ul>
 
      <ul className="navbar-nav float-right mb-2 mb-lg-0">
        
      <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
        </li>
        { profile? (
        <> 
        <li className="nav-item">
          <Link className="nav-link" to="/create" >Create Post</Link>
        </li>
  
        <li className="nav-item">
          <Link className="nav-link" to="/profile">Profile({profile?.user?.username})</Link>
        </li>
        <li className="nav-item">
          <Link class="nav-link" onClick={ logoutNow }>Logout</Link>
        </li> </>) : 
        (<> 
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">Register</Link>
        </li></> 
        )}
 

      </ul>

    </div>
   </div>
   
 </nav>
  <hr/>
 
            
        </div>
    )
}

export default Navbar
