import Display from "../output-display/Display";
import "./output.css";

export default function Output() {
  return (
    <div className="output-container">
      <div>
        <Display />
        <Display />
      </div>
      <button>reset</button>
    </div>
  );
}
