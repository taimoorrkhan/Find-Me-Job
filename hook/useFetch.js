import { useState, useEffect } from "react";
import axios from "axios";


const useFetch = ({ endPoint, query }) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(query);
  console.log(endPoint);
  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endPoint}`,
    params: { ...query },
    headers: {
      'X-RapidAPI-Key': 'df04ce14c9msh079ca82a2d1400ep1d8828jsnb164e49638f6',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.request(options);
      console.log(response.data.data);
      setData(response.data.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      alert("Something went wrong, please try again later.")
    }
    finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const refetch = () => {
    setLoading(true);
    fetchData();
  };
  return { data, loading, error, refetch };
};

export default useFetch;