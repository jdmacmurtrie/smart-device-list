import classNames from "classnames";
import { bool, func, string } from 'prop-types'

export default function ToggleButton({ disabled, handleClick, label, isToggledOn }) {
  const toggledOnClass = isToggledOn && "toggle-button--on";

  return (
    <button
      disabled={disabled}
      className={classNames("toggle-button", toggledOnClass)}
      onClick={handleClick}
    >
      {label}
    </button>
  );
}

ToggleButton.propTypes = {
  disabled: bool,
  handleClick: func,
  label: string,
  isToggledOn: bool
}