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

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://z8t2o.sse.codesandbox.io/",
        axiosRequestConfig
      );
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Hello {data.profile.firstName}</h1>
      <Nav profile={data.profile} />
    </div>
  );
}
