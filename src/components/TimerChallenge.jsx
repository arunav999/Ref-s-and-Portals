import { useState, useRef } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();

  const [state, setState] = useState({
    timerStarted: false,
    timerExpired: false,
  });

  function handleStart() {
    timer.current = setTimeout(() => {
      setState({
        timerExpired: true,
      });
    }, targetTime * 1000);

    setState({
      timerStarted: true,
    });
  }

  function handleStop() {
    clearTimeout(timer.current);
    setState({
      timerStarted: false,
      timerExpired: false,
    });
  }

  return (
    <>
      <section className="challenge">
        <h2>{title}</h2>
        {state.timerExpired && <p>You lost!</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={state.timerStarted ? handleStop : handleStart}>
            {state.timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={state.timerStarted ? "active" : undefined}>
          {state.timerStarted ? "Timer is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
