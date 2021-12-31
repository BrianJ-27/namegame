import { useState, useEffect } from "react";
import axios from "axios";



const useGetEmployees = (url) => {

 const [data, setData] = useState([]);
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState(null);

 useEffect(() =>{
    // 
    setLoading(true)
    // axious call is asynchronous will make a request to the API 
     axios.get('https://namegame.willowtreeapps.com/api/v1.0/profiles')
     .then((response)=> {
        setData(response.data) // if it succeeds, it sets the data that was returned from the API request
     })
     .catch((err) => { // if the request fails, it will cache the error and set the error to be equal to the error state
        setError(err)    
     })
     .finally(() => { // set loading to false regardless if the request was successful or fails. runs after the promise resolves
        setLoading(false);
     })
 }, [url]) // reason for dependency array, if the URL changes, we want to request the new data

    return { data, loading, error}

}

export default useGetEmployees;









