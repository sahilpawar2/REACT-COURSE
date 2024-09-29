import React, { useEffect } from 'react';
import images3 from './image/tangled-movie-poster-wallpaper.jpg';
import images2 from './image/1304925.jpg';
import Slider from './Slider';
import UseRecipeInfo from '../hooks/UseRecipeInfo';
import { useState } from 'react';


const Home = () => {
  const [recipe , setrecipe] = useState('chiken')
  const [image, setimage] = useState()

  const {data} = UseRecipeInfo(`https://api.edamam.com/api/recipes/v2?type=public&app_id=d1a3ac8a&app_key=b0fed65ad32dccb9a30c63a355fbc8e7&q=${recipe}`)
  console.log(data.hits[1])
  
  
 
  return (
<>

<div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      
       <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Your Website!</h1>
       <p className="text-lg text-gray-600 mb-6 text-center">
         This is your homepage. Here you can provide an introduction to your site and guide users to the main content.
       </p>
       
 
       <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
         Get Started
       </button>
     </div>
</>
  );
};

export default Home;
