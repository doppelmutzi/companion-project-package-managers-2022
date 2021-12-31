import { useState, useEffect } from "react";

export default (url) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchFiles() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    }
    fetchFiles();
  }, [url]);
  // return { response, error };
  return [response, error];
};
