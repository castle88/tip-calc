import React from "react";
import "./bill.css";

export default function InputField({ state, setState, title }) {
  const handleChange = (e) => {
    setState(e.target.value);
  };

  return (
    <div className="input-field-container">
      <label for={title}>{title}</label>
      <input type="number" name={title} value={state} onChange={handleChange} />
    </div>
  );
}
