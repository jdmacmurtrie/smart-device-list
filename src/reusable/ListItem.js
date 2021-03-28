import BasicLock from "../components/BasicLock";
import SpecialLock from "../components/SpecialLock";

export default function ListItem({ device }) {
  let deviceControls;
  switch (device.type) {
    case "basic-lock":
      deviceControls = <BasicLock {...device} />;
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
      {deviceControls}
    </div>
  );
}
