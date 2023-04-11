import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar({setToken}) {
  const history=useNavigate();

 function logoutHandler(){
  setToken("")
  localStorage.clear()
  history('/')
 }

 /* useEffect(()=>{
    if(!localStorage.getItem('auth')) history('/')
  },[logout])

  function logoutHandler(e){

    e.preventDefault();
    localStorage.removeItem('auth');
    setLogout(true)
  }*/
  return (
    <div>
        
        <nav  className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a id='navbrand' className="navbar-brand" href="index.html"><b>Aqua</b></a>
  
  <div className="collapse navbar-collapse offset-md-2" >
    <ul className="navbar-nav" id='navbar'>
      
      <li className="nav-item">
        <Link className="btn btn-dark mx-4" to="rawmaterials"><b>Raw Materials</b></Link>
      </li>
      <li className="nav-item ">
        <Link className="btn btn-dark mx-4" to="stocks"><b>Stocks</b></Link>
      </li>
      <li className="nav-item ">
        <Link className="btn btn-dark mx-4" to="customers"><b>Customers</b></Link>
      </li>
      <button onClick={logoutHandler} className="btn btn-dark text-left mx-5">
        <b>Logout</b>
      </button>
    </ul>
    
    <div id='login'>

    </div>
  </div>
  <div id='mobile'>
    <i id='bar' className='fas fa-bars'></i>
    <i className='fas fa-times'></i>
  </div>
</nav>

    </div>
  )
}
