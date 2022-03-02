import Bill from "../bill-input/Bill";
import Percent from "../percent-select/Percent";
import People from "../people-count/People";

export default function Input() {
  return (
    <section>
      <Bill />
      <Percent />
      <People />
    </section>
  );
}
