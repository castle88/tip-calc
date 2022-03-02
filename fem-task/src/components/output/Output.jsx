import Display from "../output-display/Display";
import "./output.css";
import { useState } from "react";
import { useEffect } from "react";

export default function Output({ bill, tip, people, reset }) {
  const [tipAmount, setTipAmount] = useState(0);
  const [totalPerson, setTotalPerson] = useState(0);

  useEffect(() => {
    const tipTotal = (bill * tip) / people;
    const totalPerPerson = bill / people + tipTotal;

    setTipAmount(tipTotal);
    setTotalPerson(totalPerPerson);
  }, [bill, tip, people]);
  return (
    <div className="output-container">
      <div>
        <Display
          amount={tipAmount ? tipAmount.toFixed(2) : 0}
          title={"Tip Amount"}
        />
        <Display
          amount={totalPerson ? totalPerson.toFixed(2) : 0}
          title={"Number of People"}
        />
      </div>
      <button onClick={reset}>reset</button>
    </div>
  );
}
