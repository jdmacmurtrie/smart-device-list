#### You are building an interface to display all the devices on a property
Those devices need to be retrieved using 3 different api calls.
Consider the `json` files under the `data` directory the responses for those calls.

#### Devices
The data structures from each api are different.

In the `lock_list` you'll find 2 locks with different capabilities:
- *Bluetooth* locks are only actionable when the user is within range of the lock
- *Wifi* locks are actionable all the time

The lock under `special_integrations` is actionable only during the given schedule

Meanwhile, under `other_iot_devices`, you'll see 3 different types of devices:
- *Light Switches* and *Outlet Switches* can be turned on and off
- *Dimmers* can also be turned on and off, but they can also be set on a scale of 1-100,
with 100 representing the brightest value and 1 the dimmest
- *Water Meters* have no state and are not actionable

#### The Challenge
1. Create a paginated device list UI in React
    - 5 devices per page

2. Each list item should display:
    - each device's name,
    - their state (if available),
    - and an input to action them

3. Your code should seamlessly handle the differences between devices.

4. Create reusable components where able.


Feel free to include any libraries you like.

Don't spend too much time on styling.
We're most interested in your ability to write clean code,
and promise we won't judge you on your styling, unless you tell us to :)
