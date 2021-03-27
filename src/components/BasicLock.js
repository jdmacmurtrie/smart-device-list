import React, { useState } from "react";
import ToggleSwitch from "../reusable/Checkbox";

export default function BasicLock({ capabilities, id, status }) {
  const [isActive, setActive] = useState(false);

  const handleChange = () => {
    setActive(!isActive);
  };

  const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);
  const label = isActive ? "Locked" : "Unlocked";

  return (
    <div className="basic-lock">
      {capabilities.map((capability) => (
        <div>{`${capitalize(capability)}: ${capitalize(status)}`}</div>
      ))}
      <ToggleSwitch
        checked={isActive}
        disabled={status === "unavailable"}
        handleChange={handleChange}
        id={id}
        label={label}
      />
    </div>
  );
}
