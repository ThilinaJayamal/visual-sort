import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [numbers, setNumbers] = useState([5, 8, 2, 17, 1, 3, 9]);

  const selectionSort = async () => {
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

  const insertionSort = () => {
    for (let j = 1; j < numbers.length; j++) {
      let key = numbers[j];
      let i = j - 1;
      while (i >= 0 && numbers[i] > key) {
        numbers[i + 1] = numbers[i];
        i = i - 1;
        setNumbers([...numbers]);
      }
      numbers[i + 1] = key;
      setNumbers([...numbers]);
    }
    console.log(numbers);
  }

  return (
    <>
      <di className='flex-1 flex-row'>
        {
          numbers.toString()
        }
      </di>
      <h1 onClick={() => selectionSort()}>selection sort</h1>
      <h1 onClick={() => insertionSort()}>insertion sort</h1>
    </>
  )
}

export default App
