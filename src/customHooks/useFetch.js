import {useState, useEffect} from 'react';

export function useFetch(url) {
  
    const [data,setData] = useState(null);
    const [error,setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        setLoading(true);
        fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(err => setError(err))
        .finally(()=> setLoading(false))
    },[url]);

    return {data, loading, error};
}

