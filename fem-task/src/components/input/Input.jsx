import Bill from "../bill-input/Bill";
import Percent from "../percent-select/Percent";
import "./input.css";

export default function Input() {
  return (
    <section className="input-container">
      <Bill />
      <Percent />
      <Bill />
    </section>
  );
}
