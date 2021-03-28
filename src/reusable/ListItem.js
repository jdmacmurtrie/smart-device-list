import BasicLock from "../components/BasicLock";
import OtherDevice from "../components/OtherDevice";
import SpecialLock from "../components/SpecialLock";

export default function ListItem({ device }) {
  let deviceControls;
  switch (device.type) {
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
