import classNames from "classnames";

export default function LockToggle({ disabled, handleChange, label, isLocked }) {
  const unlockedClass = !isLocked && "lock-toggle--unlocked";

  return (
    <button
      disabled={disabled}
      className={classNames("lock-toggle", unlockedClass)}
      onClick={handleChange}
    >
      {label}
    </button>
  );
}
