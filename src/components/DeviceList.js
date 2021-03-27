import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setBasicLocks } from "../modules/basicLocks";
import { setOtherDevices } from "../modules/otherDevices";
import { setSpecialLocks } from "../modules/specialLocks";

import Pagination from "./Pagination";
import { DeviceService } from "../deviceService";

const service = new DeviceService();

export default function DeviceList() {
  const dispatch = useDispatch();

  const basicLocks = useSelector((state) => state.basicLocks.fullList);
  const otherDevices = useSelector((state) => state.otherDevices.fullList);
  const specialLocks = useSelector((state) => state.specialLocks.fullList);

  useEffect(() => {
    const setData = (locks) => {
      dispatch(setBasicLocks(locks));
    };
    service.getBasicLocks(setData);
  }, [basicLocks, dispatch]);

  useEffect(() => {
    const setData = (devices) => {
      dispatch(setOtherDevices(devices));
    };
    service.getOtherDevices(setData);
  }, [otherDevices, dispatch]);

  useEffect(() => {
    const setData = (devices) => {
      dispatch(setSpecialLocks(devices));
    };
    service.getSpecialLocks(setData);
  }, [specialLocks, dispatch]);

  const allDevices = [...basicLocks, ...specialLocks, ...otherDevices];

  return (
    <div className="device-list">
      <h2>Your Devices</h2>
      <Pagination devices={allDevices} />
    </div>
  );
}
