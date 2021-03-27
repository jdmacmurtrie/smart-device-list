import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { setBasicLocks, setOtherDevices, setSpecialLocks } from "../actions";

import { basicLocksWithType } from "../selectors";

import Pagination from "../components/Pagination";
import { DeviceService } from "../deviceService";

const service = new DeviceService();

export default function DeviceList() {
  const dispatch = useDispatch();

  const basicLocks = useSelector(basicLocksWithType, shallowEqual);
  const otherDevices = useSelector((state) => state.otherDevices.fullList);
  const specialLocks = useSelector((state) => state.specialLocks.fullList);

  useEffect(() => {
    if (!basicLocks.length) {
      const setData = (locks) => {
        dispatch(setBasicLocks(locks));
      };
      service.getBasicLocks(setData);
    }
  }, [basicLocks, dispatch]);

  useEffect(() => {
    if (!otherDevices.length) {
      const setData = (devices) => {
        dispatch(setOtherDevices(devices));
      };
      service.getOtherDevices(setData);
    }
  }, [otherDevices, dispatch]);

  useEffect(() => {
    if (!specialLocks.length) {
      const setData = (devices) => {
        dispatch(setSpecialLocks(devices));
      };
      service.getSpecialLocks(setData);
    }
  }, [specialLocks, dispatch]);

  const allDevices = [...basicLocks, ...specialLocks, ...otherDevices];

  return (
    <div className="device-list">
      <h2>Your Devices</h2>
      <Pagination devices={allDevices} />
    </div>
  );
}
