import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { getToken } from "./Comon"


const Publicroutes=()=>{
  //  return !getToken() ? <Outlet/> : <Navigate to='/customers'/>
}

export default Publicroutes