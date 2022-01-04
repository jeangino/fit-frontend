import "./styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";

const axiosRequestConfig = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
};

export default function App() {
  const [data, setData] = useState({ profile: {} });
  const [isLoading, setIsLoading] = useState(false);

  // See https://www.robinwieruch.de/react-hooks-fetch-data/
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(
        "https://eg-fit-backend.herokuapp.com/profile",
        axiosRequestConfig
      );
      setData(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <p>...loading...</p>
      ) : (
        <>
          <h1>Hello {data.profile.firstName}</h1>
          <Nav profile={data.profile} />
        </>
      )}
    </div>
  );
}
