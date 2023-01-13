import "./index.css";
import { Button } from "../Button";
import { useEffect, useState } from "react";
import { WATCHER_STATE } from "../../constants";
import { useDispatch } from "react-redux";
import { onStartAction, onStopAction } from "../../redux/action";
import { useSelector } from "react-redux";

export const Activity = () => {
  const min = useSelector((state) => state.watcherReducers.min);
  const sec = useSelector((state) => state.watcherReducers.sec);
  const ms = useSelector((state) => state.watcherReducers.ms);
  const [timer, setTimer] = useState({ min, sec, ms });
  let myInterval;

  const [activity, setActivity] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onStartAction({ ...timer }));
  }, [dispatch, timer]);

  const onStart = () => {
    setActivity(WATCHER_STATE.START);
    setTimer({ min: min + 1, sec: sec + 10, ms: ms + 34 });
  };
  const onStop = () => {
    setActivity(WATCHER_STATE.STOP);
    clearInterval(myInterval);
    dispatch(onStopAction());
  };
  const onLapped = () => {
    setActivity(WATCHER_STATE.LAP);
  };

  return (
    <div className="activity-wrapper">
      <div className="action-wrapper">
        <Button
          name={WATCHER_STATE.START}
          isClick={activity === WATCHER_STATE.START}
          onClick={onStart}
        />
        <Button
          name={WATCHER_STATE.STOP}
          isClick={activity === WATCHER_STATE.STOP}
          onClick={onStop}
        />
      </div>
      <div className="lap-wrapper">
        <Button
          name={WATCHER_STATE.LAP}
          isClick={activity === WATCHER_STATE.LAP}
          onClick={onLapped}
        />
      </div>
      <div>{activity}</div>
    </div>
  );
};
