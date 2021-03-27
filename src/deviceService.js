const fetchData = (url, callback) => {
  fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      callback(data);
    });
};

export class DeviceService {
  getBasicLocks = (setData) => {
    fetchData("data/lock_list.json", (response) => {
      setData(response.locks);
    });
  };

  getSpecialLocks = (setData) => {
    fetchData("data/special_integration_lock.json", (response) => {
      setData(response.results);
    });
  };

  getOtherDevices = (setData) => {
    fetchData("data/other_iot_devices.json", (response) => {
      setData(response.results);
    });
  };
}
