import classNames from "classnames";

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
