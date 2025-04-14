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

    dispatch({type: 'ADD_RANDNUM', payload: randomNumberInRange(1, 10)})
  }



  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank"><img src={viteLogo} className="logo" alt="Vite logo" /></a>
        <a href="https://react.dev" target="_blank"><img src={reactLogo} className="logo react" alt="React logo" /></a>
      </div>
      <h1>Vite + React</h1>

      <div className="card">

        <div className='card-title'>
          <button onClick={ addRandNum}>
            Add Random Number
          </button>
        </div>

        <div className='card-body'>
          <ul>
            {state.randNums.map((randNum, i) => (
              <li key={i}>{randNum.num}</li>
            ))}
          </ul>
        </div>
        <p>{console.log(state.randNums)}</p>


      </div>

    </>
  )
}

export default App
