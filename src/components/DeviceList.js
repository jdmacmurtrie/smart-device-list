import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";
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
  console.log(allDevices);
  return (
    <div className="device-list">
      {allDevices.map((device, index) => (
        <ListItem key={index} device={device} />
      ))}
    </div>
  );
}
