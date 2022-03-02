import Input from "../input/Input";
import Output from "../output/Output";
import "./card.css";
import { useState } from "react";

export default function Card() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);

  const reset = () => {
    setBill(0);
    setTip(0);
    setPeople(0);
  };

  return (
    <section className="card">
      <Input
        bill={bill}
        tip={tip}
        people={people}
        setBill={setBill}
        setTip={setTip}
        setPeople={setPeople}
      />
      <Output bill={bill} tip={tip} people={people} reset={reset} />
    </section>
  );
}
