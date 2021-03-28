import React, { useState } from "react";
import { arrayOf, string } from "prop-types";

import ToggleButton from "../reusable/ToggleButton";

import { capitalize } from "../utils";

export default function BasicLock({ capabilities, name, status }) {
  const [isLocked, setLocked] = useState(true);

  const statusText = isLocked ? "Locked" : "Unlocked";
  const label = isLocked ? "Unlock" : "Lock";
  const statusClass = `basic-lock-status--${status}`;

  const handleClick = () => {
    setLocked(!isLocked);
  };

  return (
    <div className="basic-lock">
      <div className="basic-lock-heading">
        <strong>{name}</strong>
        <div className="basic-lock-heading-status">{statusText}</div>
      </div>
      <div className="basic-lock-controls">
        <div className="basic-lock-capabilities">
          {capabilities.map((capability, index) => (
            <div key={index}>
              <span>{`${capitalize(capability)}: `}</span>
              <span className={statusClass}>{capitalize(status)}</span>
            </div>
          ))}
        </div>
        <ToggleButton
          isToggledOn={!isLocked}
          disabled={status === "unavailable"}
          handleClick={handleClick}
          label={label}
        />
      </div>
    </div>
  );
}

BasicLock.propTypes = {
  capabilities: arrayOf(string),
  name: string,
  status: string,
};
