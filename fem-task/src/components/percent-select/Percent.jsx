import React from "react";
import "./percent.css";

export default function Percent({ tip, setTip }) {
  const handleClick = (e) => {
    setTip(e.target.value);
  };

  return (
    <div className="percent-select-container">
      <label>Select Tip %</label>
      <ul>
        <li>
          <button onClick={handleClick} value={0.05}>
            5%
          </button>
        </li>
        <li>
          <button onClick={handleClick} value={0.1}>
            10%
          </button>
        </li>
        <li>
          <button onClick={handleClick} value={0.15}>
            15%
          </button>
        </li>
        <li>
          <button onClick={handleClick} value={0.25}>
            25%
          </button>
        </li>
        <li>
          <button onClick={handleClick} value={0.5}>
            50%
          </button>
        </li>
        <li>
          <button>Custom</button>
        </li>
      </ul>
    </div>
  );
}
