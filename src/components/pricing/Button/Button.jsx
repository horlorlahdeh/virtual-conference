import "./Button.css";

const Button = ({text}) => {
  return (
    <button className="button-pricingpage">
      {text}<span>{">"}</span>
    </button>
  );
};

export default Button;
