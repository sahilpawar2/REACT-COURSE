import { useState } from 'react'
import UseRecipeInfo from "./hooks/UseRecipeInfo.js";
import Card from './Component/Card.jsx';

function App() { 
   const useinfo = UseRecipeInfo()
   

  return (
    <>
     <div className="flex space-x-4 items-center ">
       <Card/>
       <Card/>
       <Card/>
     </div>
     
    </>
  )
}

export default App
