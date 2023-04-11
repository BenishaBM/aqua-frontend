import React, { useEffect, useState } from 'react'
import './Login.css'
import * as Yup from "yup"
import { emailValidator, passwordValidator } from '../components/regexValidator'
import {useNavigate} from "react-router-dom"
import axios from 'axios'
import { userLogin } from '../user-service/User-service'
import { useUser } from '.'
import { setUserSession } from '../Util/Comon'


export default function Login({token,setToken}) {

  const user=useUser
  const history=useNavigate();
  //const [input,setInput]=useState({usernfame:'',password:''})
  const[username,setUsername]=useState('')
  const[password,setPassword]=useState('')
  const[errorMessage,setErrorMessage]=useState('')

  
 /*function handlechange(e){
  setUsername({...username,[e.target.id]: e.target.value})
  setPassword({...password,[e.target.id]:e.target.value})
 }*/

/* useEffect(()=>{
  if(localStorage.getItem('auth')) history('/navbar')
 },[])*/
function handlesubmit(e){
   e.preventDefault();
 
   axios({
    url:'http://localhost:8085/user/login',
    method:'post',
    data:{
      userName:username,
      password:password
    },
   }).then((response)=>{
    console.log(response.data.token)
    setToken(response.data.token)
    localStorage.setItem("userToken",response.data.token);

  //setUserSession(response.data.jwt,response.data.user);

 }).catch((err)=>{
  console.log(err.response)
  setErrorMessage(err.response.data);
  // if(err.response.status===401) setErrorMessage(err.response.message)

  // else setErrorMessage("something went wrong")
 })
 history('/')
 
 

  
   // if(!emailValidator(input.username)) return setErrorMessage("please enter a valid email address");
 // if(input.email !=='admin@a.com' || input.password !=='devil@2020') return setErrorMessage("invalid password or email");

  
  
  
}
 /*userLogin(input).then((jwtTokenData)=>{
  console.log("user login:")
  console.log(jwtTokenData)
 }).catch(error=>{
  console.log(error)
  if(error.response.status==400){
    setErrorMessage(error.response.data.message)
  }
  else{
    setErrorMessage("something went wrong on server");
  }

 
 })

.then((data) => {
  if (data) {
    user.setJwt(data);
    history("/navbar");
  }
});*/


 


  return (
    <div>
        <div id='login' className='card col-md-6 offset-md-2 shadow'>
          <div className='container'>
            <div className='card-content mt-4'>
              <h2 className=''>LOGIN</h2>
           
                <form >
                    <input onChange={(e)=>setUsername(e.target.value)} type={username} className='form form-control mt-4 rounded shadow'id='username'  placeholder='Username'/><br/>
                    <input onChange={(e)=>setPassword(e.target.value)} value={password}  type={'password'}className='form form-control mt-4 rounded shadow'id='password'placeholder='Password' autoComplete='newpassword'/><br/>
                    
                    <button type='submit' onClick={handlesubmit} className='btn btn-danger mt-4'>Login</button>
                    
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}
