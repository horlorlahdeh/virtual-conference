import "./Button.css";

const Button = ({text}) => {
  return (
    <button className="button-speakerspage">
      {text}<span>{">"}</span>
    </button>
  );
};

export default Button;
