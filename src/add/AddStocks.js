import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Stocks from '../NavbarComponents/Stocks'

export default function AddStocks() {
    const[stockdata,setStockdata]=useState([]);

    useEffect(()=>{
        loadstock();
    },[])

    const loadstock=async()=>{
        const result=await axios.get('http://localhost:8080/')
        setStockdata(result.data)
    }


    function handlechange(e){
       // setStockdata({...stockdata,[e.target.id]:e.target.value})

    }

  return (
    <div>
        <div className='container'>
            <div className='card col-md-10 shadow'>
                <div className='card-content'>
                   <b>update raw stocks</b> 
                    <div className=''>
                    <input id='bill' type="text" onChange={handlechange} className='form-control-sm mx-2 mt-4'placeholder='Bill no'/>
                    <input id='date' type="Date" onChange={handlechange} className='form-control-sm mx-2 mt-4'placeholder='Date'/>
                    <input id='gst' type="text" onChange={handlechange} className='form-control-sm mx-2 mt-4'placeholder='GST'/>
                    <input id='discount' type="text" onChange={handlechange} className='form-control-sm mx-2 mt-4'placeholder='Discount'/>
                    </div>
                    <table className='table mt-4'>
                        <thead>
                        <tr>
                            <th scope='column'>RawMaterial</th>
                            <th scope='column'>Current Stocks</th>
                            <th scope='column'>New Stocks</th>
                            <th scope='column'>Principle price</th>
                            <th scope='column'>Total</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                stockdata.map((stock,index)=>(
                                    <tr>
                                        <th scope='row' key={index}>{index+1}</th>
                                        <td>{stock.RawMaterial}</td>
                                        <td>{stock.CurrentStocks}</td>
                                    </tr>
                                ))
                            }
                            
                           

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}
