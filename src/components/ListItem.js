import BasicLock from "./BasicLock";
import OtherDevice from "./OtherDevice";
import SpecialLock from "./SpecialLock";

export default function ListItem({ device }) {
  let deviceComponent;
  switch (device.type) {
    case "basic-lock":
      deviceComponent = <BasicLock {...device} />;
      break;

    case "other-device":
      deviceComponent = <OtherDevice {...device} />;
      break;

    case "special-lock":
      deviceComponent = <SpecialLock {...device} />;
      break;

    default:
      break;
  }

  return <div className="list-item">{deviceComponent}</div>;
}
