import React from 'react'
import { useEffect, useState } from 'react'


function UseRecipeInfo(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError('Error fetching data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error }; // The `data` object has an array `items`.
}

export default UseRecipeInfo
