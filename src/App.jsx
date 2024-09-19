import { useState } from 'react'
import './App.css'

function App() {
 const numbers = [5,8,2,17,1,3,9];
  return (
    <di>
      {
        numbers.map((num,index)=>{
          return(
            <h1 key={index} className='text-red-600'>{num}</h1>
          )
        })
      }
    </di>
  )
}

export default App
