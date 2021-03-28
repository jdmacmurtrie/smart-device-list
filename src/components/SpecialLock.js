import React, { useState } from "react";
import { bool, string } from "prop-types";

import ToggleButton from "../reusable/ToggleButton";

export default function SpecialLock({ accessible, name }) {
  const [isLocked, setLocked] = useState(true);

  const label = isLocked ? "Unlock" : "Lock";
  const statusClass = `special-lock-accessible--${accessible ? "yes" : "no"}`;

  const handleClick = () => {
    setLocked(!isLocked);
  };

  return (
    <div className="special-lock">
      <strong>{name}</strong>
      <div className="special-lock-controls">
        <div>
          <span>Currently accessible: </span>
          <span className={statusClass}>{`${accessible ? "Yes" : "No"}`}</span>
        </div>
        <ToggleButton
          isToggledOn={!isLocked}
          disabled={!accessible}
          handleClick={handleClick}
          label={label}
        />
      </div>
    </div>
  );
}

SpecialLock.propTypes = {
  accessible: bool,
  name: string,
};
