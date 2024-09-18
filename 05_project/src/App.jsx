import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className= 'bg-green-400 justify-center-auto p-4 w-[300px] h-[200px] text-center text-[20px] '><h1 >COUNTER</h1></div>
    </>
  )
}

export default App
