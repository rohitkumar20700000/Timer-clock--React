import React, { useState, useEffect, useRef } from 'react';
import './TimerDemo.css';

function TimerDemo() {
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    console.log(`Timer updated: ${mins}:${secs}`);
  }, [mins, secs]);

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
    setMins(0);
    setSecs(0);
    stop();
  };

  return (
    <>
      <h2>Stopwatch</h2>
      <div className='main-div'>
        <span className='timer-image'>Timer</span>
        <div className='timer'>
          {mins < 10 ? `0${mins}` : mins} : {secs < 10 ? `0${secs}` : secs}
        </div>
        <button className='start-button' onClick={start}>Start</button>
        <button className='stop-button' onClick={stop}>Stop</button>
        <button className='reset-button' onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export default TimerDemo;

