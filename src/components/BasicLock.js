import React, { useState } from "react";
import { arrayOf, string } from "prop-types";

import Heading from "../reusable/Heading";
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
      <Heading heading={name} status={statusText} />
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
