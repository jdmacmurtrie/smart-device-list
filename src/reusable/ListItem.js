import BasicLock from "../components/BasicLock";

export default function ListItem({ device }) {
  let deviceControls;
  switch (device.type) {
    case "basic-lock":
      deviceControls = <BasicLock {...device} />;
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
