import "./styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";

const axiosRequestConfig = {};

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

export default function App() {
  const [data, setData] = useState({ profile: {} });
  const [isLoading, setIsLoading] = useState(false);
  const userId = getCookie("fitUserId");
  console.log("FITUSERID: " + userId);
  const getUserIdUrl = process.env.REACT_APP_BACKEND_URL + "/users/" + userId;
  const googleLoginUrl = process.env.REACT_APP_BACKEND_URL + "/google-auth";

  // See https://www.robinwieruch.de/react-hooks-fetch-data/
  useEffect(() => {
    const fetchData = async () => {
      if (userId) {
        setIsLoading(true);
        const result = await axios.get(getUserIdUrl);
        setData(result.data);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {userId ? (
        <p>Welcome {data.firstName}!</p>
      ) : (
        <a href={googleLoginUrl}>GOOGLE LOGIN</a>
      )}
      <Nav />
    </div>
  );
}
