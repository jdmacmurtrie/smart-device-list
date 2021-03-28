import React from "react";
import { useDispatch } from "react-redux";

import { toggleDeviceSwitch } from "../actions";

import ToggleButton from "../reusable/ToggleButton";

export default function OtherDevice({ apiId, id, state }) {
  const dispatch = useDispatch();

  if (!state?.switchState) {
    return null;
  }

  const { level, switchState } = state;

  const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);
  const label = capitalize(switchState);

  const handleButtonClick = () => {
    const payload = {
      id: apiId,
      state: { switchState: switchState === "on" ? "off" : "on" },
    };
    dispatch(toggleDeviceSwitch(payload));
  };

  const handleSliderChange = ({ target }) => {
    const payload = {
      id: apiId,
      state: { level: target.value },
    };
    dispatch(toggleDeviceSwitch(payload));
  };

  return (
    <div className="other-device">
      <ToggleButton
        isToggledOn={switchState === "on"}
        handleClick={handleButtonClick}
        label={label}
      />
      {level && (
        <div className="other-device-level">
          <input
            className="other-device-slider"
            id={id}
            max="100"
            min="1"
            onChange={handleSliderChange}
            type="range"
            value={level}
          />
          <div className="other-device-level-text">{level}</div>
        </div>
      )}
    </div>
  );
}
