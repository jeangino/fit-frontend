import "./styles.css";
import React from "react";

export default function Nav(props) {
  return (
    <div className="Nav">
      <p>Email: {props.user.email}</p>
      <ul>
        <li>Profile</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
      </ul>
    </div>
  );
}
