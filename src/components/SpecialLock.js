import React, { useState } from "react";
import ToggleButton from "../reusable/ToggleButton";

export default function SpecialLock({ accessible }) {
  const [isLocked, setLocked] = useState(true);

  const label = isLocked ? "Locked" : "Unlocked";

  const handleClick = () => {
    setLocked(!isLocked);
  };

  return (
    <>
      <div>{`Currently accessible: ${accessible ? "Yes" : "No"}`}</div>
      <ToggleButton
        isToggledOn={!isLocked}
        disabled={!accessible}
        handleClick={handleClick}
        label={label}
      />
    </>
  );
}
