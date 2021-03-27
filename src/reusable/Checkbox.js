export default function ToggleSwitch({ checked, disabled, id, handleChange, label }) {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
      <label htmlFor={id}>
        <span className={disabled ? "checkbox-label--disabled" : ""}>{label}</span>
      </label>
    </div>
  );
}
