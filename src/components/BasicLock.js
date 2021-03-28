import React, { useState } from "react";
import ToggleButton from "../reusable/ToggleButton";

export default function BasicLock({ capabilities, id, status }) {
  // id is unsued variable
  const [isLocked, setLocked] = useState(true);

  // This is used in a couple places, maybe make a helper function?
  const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);
  const label = isLocked ? "Locked" : "Unlocked";

  const handleClick = () => {
    setLocked(!isLocked);
  };

  return (
    <>
      {capabilities.map((capability, index) => (
        <div key={index}>{`${capitalize(capability)}: ${capitalize(
          status
        )}`}</div>
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
