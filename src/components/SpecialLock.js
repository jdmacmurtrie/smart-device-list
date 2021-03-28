import React, { useState } from "react";
import LockToggle from "../reusable/LockToggle";

export default function BasicLock({ accessible, id }) {
  const [isLocked, setLocked] = useState(true);

  const label = isLocked ? "Locked" : "Unlocked";

  const handleChange = () => {
    setLocked(!isLocked);
  };

  return (
    <div className="basic-lock">
      <div>{`Currently accessible: ${accessible ? "Yes" : "No"}`}</div>
      <LockToggle
        isLocked={isLocked}
        disabled={!accessible}
        handleChange={handleChange}
        label={label}
      />
    </div>
  );
}
