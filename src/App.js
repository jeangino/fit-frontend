import "./styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";

const axiosRequestConfig = {
};

export default function App() {
  const [data, setData] = useState({ profile: {} });
  const [isLoading, setIsLoading] = useState(false);
  const backendUrl = process.env.REACT_APP_BACKEND_URL + "/users/61d63199c4b3ef8ad9cd46fb";
  console.log(backendUrl);

  // See https://www.robinwieruch.de/react-hooks-fetch-data/
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios.get(
        backendUrl
      );
      setData(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="App">
      {isLoading ? (
        <p>...loading...</p>
      ) : (
        <>
          <h1>Hello {data.first_name}</h1>
          <Nav user={data} />
        </>
      )}
    </div>
  );
}
