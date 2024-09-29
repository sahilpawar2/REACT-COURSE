import React, { useState } from 'react';
import images3 from './image/tangled-movie-poster-wallpaper.jpg';
import images2 from './image/1304925.jpg';

function Slider({Image}) {
    const arr = [Image];
    console.log(arr)
    console.log(arr)
    const [currIdx, setIdx] = useState(0);
    const [slideDirection, setSlideDirection] = useState('next'); // Track slide direction

    // Function to handle the next image with sliding animation
    const nextImage = () => {
        setSlideDirection('next');
        setIdx((prevIdx) => (prevIdx + 1) % arr.length);
    };

    // Function to handle the previous image with sliding animation
    const prevImage = () => {
        setSlideDirection('prev');
        setIdx((prevIdx) => (prevIdx - 1 + arr.length) % arr.length);
    };

    return (
        <div className="h-[400px] w-[1243px] border-solid overflow-hidden relative items-center ">
            <div
                className={`flex transition-transform duration-500 ease-in-out ${slideDirection === 'next' ? '-translate-x-full' : 'translate-x-full'}`}
                style={{ transform: `translateX(-${currIdx * 100}%)` }} // Slide based on the index
            >
                {arr.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt="Slider"
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                ))}
            </div>

            <button
                onClick={prevImage}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r-lg"
            >
                Prev
            </button>
            <button
                onClick={nextImage}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l-lg"
            >
                Next
            </button>
        </div>
    );
}

export default Slider;
