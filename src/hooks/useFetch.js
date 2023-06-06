import { useEffect, useState } from 'react';
import { makeRequest } from '../makeRequest';


const useFetch = (url) => {          


  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(true); //change from false to true, otherwise Product page bug
  const [ error, setError ] = useState(false);


  useEffect( () => { 
    const fetchData = async () => {   

      try {
        setLoading(true);  
        const response = await makeRequest.get(url);
        setData(response.data.data);
      }
      catch(err) {
        setError(true);
      };
      setLoading(false);  
    };
    fetchData();
  }, [url]);
  
  return { data, loading, error };
};

export default useFetch;