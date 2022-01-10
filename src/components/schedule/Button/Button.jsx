import "./Button.css";

const Button = ({text}) => {
  return (
    <button className="button-homepage">
      {text}<span>{">"}</span>
    </button>
  );
};

export default Button;
