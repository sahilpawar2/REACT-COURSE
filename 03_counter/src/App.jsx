import { Suspense, useState } from 'react'
import './App.css'

let App = () => {
 let [count, setcount] = useState()

  return (
    <>
     
     <button onClick={setcount(count + 1)}>ADD VALUE</button>
     <br />
     <button onClick={setcount(count - 1)}>SUBTRACT VALUE</button>
    </>
  )
}

export default App
