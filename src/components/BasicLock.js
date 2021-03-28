import React, { useState } from "react";
import ToggleButton from "../reusable/ToggleButton";

export default function BasicLock({ capabilities, id, status }) {
  const [isLocked, setLocked] = useState(true);

  const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);
  const label = isLocked ? "Locked" : "Unlocked";

  const handleClick = () => {
    setLocked(!isLocked);
  };

  return (
    <>
      {capabilities.map((capability, index) => (
        <div key={index}>{`${capitalize(capability)}: ${capitalize(status)}`}</div>
      ))}
      <ToggleButton
        isToggledOn={!isLocked}
        disabled={status === "unavailable"}
        handleClick={handleClick}
        label={label}
      />
    </>
  );
}
