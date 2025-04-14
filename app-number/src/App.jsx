import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useReducer } from 'react';

import { reducer, initialState } from './store/randnumlist';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const randomNumberInRange = (min, max) => {

    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const addRandNum = () => {

    dispatch({ type: 'ADD', payload: randomNumberInRange(1, 10) });
  }

  const shuffleRandNum = () => {

    dispatch({ type: 'SHUFFLE' });
  }

  return (
    <>
      <h1>Random Numbers</h1>

      <div className="card">

        <div className='card-title'>
          <button onClick={addRandNum}>
            Add Random Number
          </button>

          <button onClick={shuffleRandNum}>
            Shuffle List
          </button>
        </div>

        <div className='card-body'>
          <div className="">
            {state.randNums.map((randNum, i) => (
              <span className="" key={i}>{randNum.num} {i < state.randNums.length - 1 ? ', ' : ''}</span>
            ))}
          </div>
        </div>
        <p>{console.log(state.randNums)}</p>


      </div>

    </>
  )
}

export default App
