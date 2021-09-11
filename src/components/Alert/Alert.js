import s from "./Alert.module.css";
import PropTypes from "prop-types";

console.log(s);

export const Alert = ({ text, type }) => {
  console.log(s[type]);
  return (
    <p role="alert" className={s[type]}>
      {text}
    </p>
  );
};

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["alert", "error", "warning", "success"]).isRequired,
};

export default Alert;
