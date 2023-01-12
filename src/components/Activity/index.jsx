import "./index.css";
import { Button } from "../Button";
import { useState } from "react";
import { WATCHER_STATE } from "../../constants";
export const Activity = () => {
  const [activity, setActivity] = useState("");

  const onStart = () => {
    setActivity(WATCHER_STATE.START);
  };
  const onStop = () => {
    setActivity(WATCHER_STATE.STOP);
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
