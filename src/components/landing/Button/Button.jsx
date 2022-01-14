import "./Button.css";

const Button = ({text}) => {
  return (
    <button className="button-landingpage">
      {text}<span>{">"}</span>
    </button>
  );
};

export default Button;
