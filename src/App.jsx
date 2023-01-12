import logo from "./logo.svg";
import "./App.css";
import { Watcher } from "./container";
function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Watcher />
    </div>
  );
}

export default App;
