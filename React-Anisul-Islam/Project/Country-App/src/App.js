import React, { useEffect, useState } from "react";

const url = "https://restcountries.com/v3.1/all";

const App = () => {
  const [isloading, setILoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);

  const fetchData = async (url) => {
    setILoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setILoading(false);
      setError(null);
    } catch (error) {
      setILoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return <div></div>;
};

export default App;
