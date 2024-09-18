import { useState } from 'react'
import images1 from './image/1304925.jpg'
import images2 from './image/mufasa-the-lion-king-poster.webp'
import images3 from './image/tangled-movie-poster-wallpaper.jpg'

import './App.css'
import Card from './Component/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="flex space-x-4">
        {/* Assembled Cards side by side */}
        <Card userName = "TRY EVERYTHING" image = {images1} />
        <Card userName = "THE NIGHTS" image = {images2}/>
        <Card userName = "MILLION TO ONE"image = {images3}/>
      </div> 
    </>
  )
}

export default App
