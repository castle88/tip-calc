import React from "react";
import "./display.css";

export default function Display({ amount, title }) {
  return (
    <div className="output-display-container">
      <div>
        <h3>{title}</h3>
        <p>/ person</p>
      </div>
      <h2>${amount}</h2>
    </div>
  );
}
