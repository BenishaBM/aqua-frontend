import { Button } from 'bootstrap'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import AddStocks from '../add/AddStocks'

export default function Rawmaterial() {

  const[data,setData]=useState([])

  useEffect(()=>{
    loaddata();
  },[])

  const loaddata=async()=>{
    const result= await axios.get('http://localhost:8080/getall')
    setData(result.data)

  }
  return (
    <div>
              <div className='container'>
                <div className='row offset-md-2 mx-2'>
                <div className='card col-md-2 mx-2 mt-2 shadow'>
                  <h2>BOTTLES</h2>
                </div>
                <div className='card col-md-2 mx-2 mt-2 shadow'>
                  <h2>CAPS</h2>
                </div>
                <div className='card col-md-2 mx-2 mt-2 shadow'>
                  <h2>STICKERS</h2>
                </div>
                </div>
            <div className='card col-md-10 mt-4 shadow'>
                <div className='card-content mt-4'>
                  <div className='offset-md-6'>
                  <Link className='btn btn-primary mx-2' to="/addstocks">Add Stocks</Link>
                  <button className='btn btn-primary mx-2'>Add Rawmaterial</button>
                  </div>
                    <table className='table mt-4'>
                       <thead>
                       <tr>
                                <th>Id</th>
                                <th>Material</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                       </thead>
                            
                            <tbody>
                              {
                                data.map((data,index)=>(
                                  <tr>
                                    <th scope='row' key={index}>{index+1}</th>
                                    
                                    <td>{data.material}</td>
                                    <td>{data.date}</td>
                                    <td>
                                      <button className='btn btn-primary mx-2'>Update</button>
                                      <button className='btn btn-primary mx-2'>Delete</button>
                                    </td>
                                  </tr>
                                )
                                )
}
                            </tbody>
                        
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}
