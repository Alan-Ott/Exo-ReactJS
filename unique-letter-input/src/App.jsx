import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useReducer } from 'react';

import { reducer, initialState } from './store/letter';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [letter, setLetter] = useState('');


  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    console.log(value);

    setLetter(value.toUpperCase());
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (letter === '') {
      alert('Champs est vide');
      console.log(letter);
      return;
    }
    
    if (letter.length > 1) {
      alert('Input trop long');
      console.log(letter);
      return;
    }
    console.log(!state.letters.includes(letter));
    if (!state.letters.includes(letter)) {
      dispatch({ type: 'ADD', payload: letter });
    } else {
      alert('Fait partie de la liste');
      return;
    }
  }

  const hanldeShuffle = (e) => {
    e.preventDefault();
    dispatch({ type: 'SHUFFLE' });
  }

  return (
    <>
      <h1>Character List</h1>

      <div className="card">

        <form action="">
          <input onChange={handleChangeInput} maxLength={"1"} type="text" name="letter" value={letter} />

          <button disabled={!letter} onClick={handleSubmit}>Insert</button>
          <button onClick={hanldeShuffle}>Shuffle</button>
        </form>

        <div className='card-body'>

          {state.letters.map((letter, i) => (
            <span key={i}>{letter} {i < state.letters.length - 1 ? ', ' : ''}</span>
          ))}
          {console.log(state)}

        </div>

      </div>
    </>
  )
}

export default App
