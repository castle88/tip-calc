import React from "react";

export default function Percent() {
  return (
    <div>
      <label>Select Tip %</label>
      <input type="radio" name="5%" value="5%" />
      <input type="radio" name="5%" value="5%" />
      <input type="radio" name="5%" value="5%" />
      <input type="radio" name="5%" value="5%" />
      <input type="radio" name="5%" value="5%" />
      <input type="number" name="custom" value="0" placeholder="Custom" />
    </div>
  );
}
