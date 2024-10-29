import axios from 'axios'
import { useEffect, useState } from "react";
import { API_HOST } from '/src/Constants.js';


export default function useGetByID(id,operation) {
  const [record, setRecord] = useState({
    memberName: ""
  });
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false)
  
  if (operation != "Create"){
    useEffect(() => {
      (async () => {
        try {
          setIsLoading(true);
          console.log("Use Effect Called");
          const {data} = await axios.get(`${API_HOST}Member/GetByID?id=${id}`);
          setRecord(data);
          
        }catch(error){
          console.log(error)
        }finally{
          setIsLoading(false);
        }
      })();
    }, []);
  }

  //console.log("AAA", isLoading, record, error);
  return {isLoading, record};
}