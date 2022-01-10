import "../../../index.css";
import "./Button.css";

const Button = ({text}) => {
  return (
    <button className="button">
      {text}<span>{">"}</span>
    </button>
  );
};

export default Button;
