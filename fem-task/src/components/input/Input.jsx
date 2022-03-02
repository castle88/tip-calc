import InputField from "../bill-input/InputField";
import Percent from "../percent-select/Percent";
import "./input.css";

export default function Input({
  bill,
  tip,
  people,
  setBill,
  setTip,
  setPeople,
}) {
  return (
    <section className="input-container">
      <InputField state={bill} setState={setBill} title={"Bill"} />
      <Percent tip={tip} setTip={setTip} />
      <InputField
        state={people}
        setState={setPeople}
        title={"Number of People"}
      />
    </section>
  );
}
