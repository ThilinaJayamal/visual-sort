import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const originalList = [5, 8, 2, 17, 1, 3, 9];

  const [numbers, setNumbers] = useState([5, 8, 2, 17, 1, 3, 9]);

  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const selectionSort = async () => {
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] > numbers[j]) {
          let temp = numbers[i];
          numbers[i] = numbers[j];
          numbers[j] = temp;
          setNumbers([...numbers]);
          await wait(2000);
        }
      }
    }
    console.log(...numbers);
  }

  const insertionSort = async () => {
    for (let j = 1; j < numbers.length; j++) {
      let key = numbers[j];
      let i = j - 1;
      while (i >= 0 && numbers[i] > key) {
        numbers[i + 1] = numbers[i];
        i = i - 1;
        setNumbers([...numbers]);
        await wait(2000);
      }
      numbers[i + 1] = key;
      setNumbers([...numbers]);
    }
    console.log(numbers);
  }

  const setColor = (num) => {
    if (num == 5) {
      return 'bg-orange-600';
    }
    else if (num == 8) {
      return 'bg-lime-600';
    }
    else if (num == 2) {
      return 'bg-green-600';
    }
    else if (num == 17) {
      return 'bg-sky-600';
    }
    else if (num == 1) {
      return 'bg-indigo-600';
    }
    else if (num == 3) {
      return 'bg-pink-600';
    }
    else {
      return 'bg-stone-600';
    }
  }
  const setHeight = (num) => {
    if (num == 5) {
      return 'h-52';
    }
    else if (num == 8) {
      return 'h-60';
    }
    else if (num == 2) {
      return 'h-32';
    }
    else if (num == 17) {
      return 'h-96';
    }
    else if (num == 1) {
      return 'h-20';
    }
    else if (num == 3) {
      return 'h-40';
    }
    else {
      return 'h-72';
    }
  }

  return (
    <div className='p-5'>
      <h1 className='font-semibold text-3xl text-center mb-5'>Let's learn sorting algorithms.</h1>
      <div className='flex flex-row my-5 gap-5 justify-center items-end'>
        {
          numbers.map((num, i) => {
            return (
              <h1 key={i} className={`
                flex w-10
                rounded-full items-center
                justify-center
                font-semibold
                text-white
                ${setColor(num)}
                ${setHeight(num)}
                `}>{num}</h1>
            )
          })
        }
      </div>

      <hr />
      
      <div className='flex flex-row gap-5 justify-center mt-5'>

        <div onClick={() => selectionSort()}
          className='px-4 py-2 bg-blue-500 w-fit rounded-full text-white cursor-pointer hover:bg-blue-600'
        >Selection sort
        </div>
        <h1 onClick={() => insertionSort()}
          className='px-4 py-2 bg-indigo-500 w-fit rounded-full text-white cursor-pointer hover:bg-indigo-600'
        >Insertion sort
        </h1>
        <h1 onClick={() => setNumbers([...originalList])}
          className='px-4 py-2 bg-gray-900 w-fit rounded-full text-white cursor-pointer hover:bg-gray-700'
        >Reset
        </h1>
      </div>

    </div>
  )
}

export default App
