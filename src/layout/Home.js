import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {

  const history=useNavigate();

  const[logout,setLogout]=useState(false)

  useEffect(()=>{
    if(localStorage.getItem('auth')) history('/login')
  },[logout])

  function handlelogout(e){

    e.preventDefault();
    localStorage.removeItem('auth');
    setLogout(true)
  }
  return (
    <div>
        <button className='btn btn-primary'onClick={handlelogout}>logout</button>
    </div>
  )
}
