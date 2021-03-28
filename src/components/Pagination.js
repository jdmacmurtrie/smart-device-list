import React, { useState } from "react";
import { bool, shape } from "prop-types";

import Button from "../reusable/Button";
import ListItem from "./ListItem";

export default function Pagination({ devices }) {
  const [currentPage, setCurrentPage] = useState(1);

  const perPage = 5;
  const totalPages = Math.ceil(devices.length / perPage);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const getDisplayedDevices = () => {
    const lastDeviceIndex = currentPage * perPage;
    const firstDeviceIndex = lastDeviceIndex - perPage;

    return devices.slice(firstDeviceIndex, lastDeviceIndex);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="pagination">
      {getDisplayedDevices().map((device) => (
        <ListItem key={device.id} device={device} />
      ))}
      <div className="pagination-button-wrapper">
        <Button disabled={isFirstPage} handleClick={previousPage} label="Previous" />
        <Button disabled={isLastPage} handleClick={nextPage} label="Next" />
      </div>
    </div>
  );
}

Pagination.propTypes = {
  devices: shape({ id: bool }),
};
