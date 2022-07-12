import "./Button.css";
import {FaCaretRight} from'react-icons/fa'

const Button = ({text,bgColor,color,border,borderColor,bgColorHover,colorHover}) => {
  return (
    <button className={`button ${bgColor} ${color} ${border} ${borderColor} hover:${bgColorHover} hover:${colorHover}`}>
      {text}<span>
      {/* <FaCaretRight/> */}
      {'>'}
      </span>
    </button>
  );
};

export default Button;
