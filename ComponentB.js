import React,{useContext} from 'react'
import { store } from './App'

const ComponentB = () => {
    const [data,setData] = useContext(store)
  return (
    <div className='card'>
    <div className='card=body'>
        <center> ComponentB {data}</center>
   </div>
</div>
  )
}

export default ComponentB