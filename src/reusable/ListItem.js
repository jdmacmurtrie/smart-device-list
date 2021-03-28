import BasicLock from "../components/BasicLock";
import OtherDevice from "../components/OtherDevice";
import SpecialLock from "../components/SpecialLock";

export default function ListItem({ device }) {
  let deviceControls;
  switch (device.type) {
    // How do you feel about an const mapper for some of these hard coded strings?
    // just to ensure that you are using the same value everywhere
    // Could live in a constants folder
    // const DeviceTypes = {
    //   BASIC_LOCK = "basic-lock",
    //   OTHER_DEVICE = "other-device",
    //   SPECIAL_LOCK = "special-lock"
    // }
    case "basic-lock":
      deviceControls = <BasicLock {...device} />;
      break;

    case "other-device":
      deviceControls = <OtherDevice {...device} />;
      break;

    case "special-lock":
      deviceControls = <SpecialLock {...device} />;
      break;

    default:
      break;
  }

  return (
    <div className="list-item">
      {device.name}
      <div className="device-controls">{deviceControls}</div>
    </div>
  );
}
