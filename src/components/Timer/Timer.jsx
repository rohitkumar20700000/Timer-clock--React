import React, { useState, useRef } from 'react';
import './Timer.css';

function Timer() {
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    if (intervalRef.current) return; // Prevent multiple intervals
    intervalRef.current = setInterval(() => {
      setSecs((prevSecs) => {
        if (prevSecs < 59) {
          return prevSecs + 1;
        } else {
          setMins((prevMins) => prevMins + 1);
          return 0;
        }
      });
    }, 1000);
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const reset = () => {
    stop();
    setMins(0);
    setSecs(0);
  };

  return (
    <div className="main-div">
      <h2>Stopwatch</h2>
      <div className="timer-image">Timer</div>
      <div className="timer">
        {`${mins < 10 ? `0${mins}` : mins}:${secs < 10 ? `0${secs}` : secs}`}
      </div>
      <div>
        <button className="start-button" onClick={start}>Start</button>
        <button className="stop-button" onClick={stop}>Stop</button>
        <button className="reset-button" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;
