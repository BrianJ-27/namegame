import { useState, useEffect } from "react";
import axios from "axios";

const useGetEmployees = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // axious call is asynchronous will make a request to the API
    axios
      .get("https://namegame.willowtreeapps.com/api/v1.0/profiles")
      .then((response) => {
        const filteredData = response.data.filter(
          (employee) =>
            employee.headshot.id !== "no id configured" &&
            employee.headshot.alt !== "no title configured"
        );
        setData(filteredData);
        setIsLoading(false);
      })
      .catch((err) => {
        // if the request fails, it will cache the error and set the error to be equal to the error state
        setError(err);
      });
  }, []); // reason for dependency array, if the URL changes, we want to request the new data once

  return { data, isLoading, error };
};

export default useGetEmployees;
