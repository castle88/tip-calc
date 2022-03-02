import React from "react";
import "./percent.css";

export default function Percent() {
  return (
    <div className="percent-select-container">
      <label>Select Tip %</label>
      <ul>
        <li>
          <button>5%</button>
        </li>
        <li>
          <button>10%</button>
        </li>
        <li>
          <button>15%</button>
        </li>
        <li>
          <button>25%</button>
        </li>
        <li>
          <button>50</button>
        </li>
        <li>
          <button>Custom</button>
        </li>
      </ul>
    </div>
  );
}
