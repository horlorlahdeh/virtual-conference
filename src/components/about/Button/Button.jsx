import "./Button.css";

const Button = ({text}) => {
  return (
    <button className="button-aboutpage">
      {text}<span>{">"}</span>
    </button>
  );
};

export default Button;
