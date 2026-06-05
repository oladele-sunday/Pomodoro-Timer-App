import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";

function Timer() {
  return (
    <div>
      <TimerDisplay time="25:00" />
      <TimerControls />
    </div>
  );
}

export default Timer;