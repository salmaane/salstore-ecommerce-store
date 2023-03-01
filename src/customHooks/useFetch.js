import {useState, useEffect} from 'react';

export function useFetch(url) {
  
    const [data,setData] = useState([]);
    const [error,setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [totalCount,setTotalCount] = useState();

    useEffect(()=> {
        setLoading(true);
        fetch(url)
        .then(response => {
            const totalCount = response.headers.get('X-Total-Count');
            setTotalCount(totalCount);
            return response.json();
        })
        .then(data => setData(data))
        .catch(err => setError(err))
        .finally(()=> setLoading(false))
    },[url]);

    return {data, totalCount, loading, error};
}

