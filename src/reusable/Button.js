import { bool, func, string } from "prop-types";

export default function Button({ disabled, handleClick, label }) {
  return (
    <button disabled={disabled} className="button" onClick={handleClick}>
      {label}
    </button>
  );
}

Button.propTypes = {
  disabled: bool,
  handleClick: func,
  label: string,
};
