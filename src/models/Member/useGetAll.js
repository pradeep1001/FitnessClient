import axios from 'axios'
import { useEffect, useState } from "react";
import { API_HOST } from '/src/Constants.js';

export default function useGetAll() {
    const [records, setRecords] = useState([]);
    const [error, setError] = useState({});
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(() => {
      (async () => {
        try {
          setIsLoading(true);
          console.log("Use Effect Called");
          const {data} = await axios.get(`${API_HOST}Member/GetAll`);
          setRecords(data);
          
        }catch(error){
          setError(error);
        }finally{
          setIsLoading(false);
        }
      })();
      
    }, []);
    
    return {isLoading, records, error};
  }