import { Provider } from "react-redux";
import { store } from "./store";

import DeviceList from "./containers/DeviceList";

import "./main.scss";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <DeviceList />
      </div>
    </Provider>
  );
}

export default App;
