import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { DeviceService } from "../deviceService";

const service = new DeviceService();

export default function DeviceList() {
  const [basicLocks, setBasicLocks] = useState([]);
  const [specialLocks, setSpecialLocks] = useState([]);
  const [otherDevices, setOtherDevices] = useState([]);

  useEffect(() => service.getBasicLocks(setBasicLocks), []);
  useEffect(() => service.getSpecialLocks(setSpecialLocks), []);
  useEffect(() => service.getOtherDevices(setOtherDevices), []);

  const allDevices = [...basicLocks, ...specialLocks, ...otherDevices];

  return (
    <div className="device-list">
      <h2>Your Devices</h2>
      <Pagination devices={allDevices} />
    </div>
  );
}
