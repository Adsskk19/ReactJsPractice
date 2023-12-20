import React,{useContext} from 'react'
import {store} from './App'
const ComponentA = () => {
    const [data,setData] = useContext(store)
  return (
    <div className='card'>
         <div className='card=body'>
         <center> ComponentA {data}</center>
        </div>
    </div>
   
  )
}

export default ComponentA