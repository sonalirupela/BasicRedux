import "./index.css";
import { useSelector } from "react-redux";

export const Display = () => {
  const min = useSelector((state) => state.watcherReducers.min);
  const sec = useSelector((state) => state.watcherReducers.sec);
  const ms = useSelector((state) => state.watcherReducers.ms);

  return (
    <div className="display-wrapper">
      <div className="word-decoration">
        <span>{min}</span>
        <span className="blink_me">:</span>
        <span>{sec}</span>
        <span className="blink_me">:</span>
        <span>{ms}</span>
      </div>
    </div>
  );
};
