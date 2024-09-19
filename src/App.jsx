import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [numbers, setNumbers] = useState([5, 8, 2, 17, 1, 3, 9]);

  const selectionSort = async() => {
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] > numbers[j]) {
          let temp = numbers[i];
          numbers[i] = numbers[j];
          numbers[j] = temp;
          setNumbers([...numbers]);
        }
      }
    }
    console.log(...numbers);
  }

  return (
    <>
      <di className='flex-1 flex-row'>
        {
          numbers.toString()
        }
      </di>
      <h1 onClick={() => selectionSort()}>sort</h1>
    </>
  )
}

export default App
