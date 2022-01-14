import "./Button.css";

const Button2 = ({text}) => {
  return (
    <button className="button-pricingpage2">
      {text}<span>{">"}</span>
    </button>
  );
};

export default Button2;
