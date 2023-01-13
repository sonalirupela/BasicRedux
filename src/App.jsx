import logo from "./logo.svg";
import "./App.css";
import { Watcher } from "./container";
import { Provider } from "react-redux";
import { store } from "./redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Watcher />
      </div>
    </Provider>
  );
}

export default App;
