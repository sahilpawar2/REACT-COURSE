import React from 'react';
import images3 from './image/tangled-movie-poster-wallpaper.jpg'



const Home = () => {
 
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        <div className=" w-w object-fill mb-6 relative">
        <img src={images3} alt="Slider" className="w-full h-auto rounded-lg shadow-lg" ></img>
        <button 
          
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r-lg"
        >
          Prev
        </button>
        <button 
          
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l-lg"
        >
          Next
        </button>
      </div>
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Your Website!</h1>
      <p className="text-lg text-gray-600 mb-6 text-center">
        This is your homepage. Here you can provide an introduction to your site and guide users to the main content.
      </p>
      

      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
        Get Started
      </button>
    </div>
  );
};

export default Home;
