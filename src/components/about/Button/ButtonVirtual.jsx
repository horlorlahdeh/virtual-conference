import "./Button.css";

const Button = ({text}) => {
  return (
    <button className="button-aboutpage2">
      {text}<span>{">"}</span>
    </button>
  );
};

export default Button;
