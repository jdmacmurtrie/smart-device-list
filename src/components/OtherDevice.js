import React from "react";
import { useDispatch } from "react-redux";
import { shape, string } from "prop-types";

import { toggleDeviceSwitch } from "../actions";

import ToggleButton from "../reusable/ToggleButton";

export default function OtherDevice({ apiId, id, name, state = {} }) {
  const dispatch = useDispatch();

  const { level, switchState = "" } = state;

  const label = switchState === "on" ? "Turn Off" : "Turn On";

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
      <strong>{name}</strong>
      {state?.switchState && (
        <div className="other-device-controls">
          <ToggleButton
            isToggledOn={switchState === "on"}
            handleClick={handleButtonClick}
            label={label}
          />
          {level && (
            <div className="other-device-level-wrapper">
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
      )}
    </div>
  );
}

OtherDevice.propTypes = {
  apiId: string,
  id: string,
  name: string,
  state: shape({ switchState: string, level: string }),
};
