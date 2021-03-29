import { string } from "prop-types";

export default function Heading({ heading, status }) {
  return (
    <div className="heading">
      <strong>{heading}</strong>
      {status && <div className="heading-status">{`(${status})`}</div>}
    </div>
  );
}

Heading.propTypes = {
  heading: string,
  status: string,
};
