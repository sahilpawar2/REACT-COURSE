import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let App = () => {
  let counter= 15
  const addVal = () => {
     counter += 1;
     console.log(counter)
  }
  const subVal = () => {
    counter -= 1;
    console.log(counter);
  }

  return (
    <>
     <h1>COUNT</h1>
     <h2>COUNTER VALUE : {counter}</h2>
     <button onClick={addVal}>ADD VALUE</button>
     <br />
     <button onClick={subVal}>SUBTRACT VALUE</button>
    </>
  )
}

export default App
