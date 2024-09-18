import React from 'react'
import { useEffect, useState } from 'react'


function UseRecipeInfo(recipe) {
    const [data, setData] = useState({})
    useEffect(() =>{ 
        fetch('https://api.edamam.com/api/recipes/v2?type=public&app_id=d1a3ac8a&app_key=b0fed65ad32dccb9a30c63a355fbc8e7&q=chicken')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
         })
        .then(data => console.log(data))
        .catch(error => console.error('There was a problem with the fetch operation:', error));
    },[recipe])
    
}

export default UseRecipeInfo
