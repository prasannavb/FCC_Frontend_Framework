import { useEffect, useRef, useState } from 'react'
import './App.css'



function App() {

  const [breakTime, setBreakTime] = useState(5 * 60);
  const [sessionTime, setSessionTime] = useState(25 * 60);
  const [play, setPlay] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [label, setLabel] = useState("Session");
  const audioRef = useRef();
  let interval = undefined;

  useEffect(() => {
    setTime(sessionTime);
  }, [sessionTime])

  useEffect(() => {
    if (play)
      interval = setInterval(startCountDown, 1000);
    else
      return

    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      clearInterval(interval);
    }
  }, [play])


  useEffect(() => {
    if (time ===  0) {
      audioRef.current.currentTime = 2;
      audioRef.current.play().catch((err)=>{
        console.log(err);
      });
      if (label === "Session"){
        setTime(breakTime);
        setLabel("Break");
      }
      else{
        setTime(sessionTime);
        setLabel("Session");
      }
    }
  }, [time])

  const startCountDown = () => {
    setTime((prev) => (prev - 1));
  }

  const resetTime = () => {
    setPlay(false);
    setBreakTime(5 * 60);
    setSessionTime(25 * 60);
    setTime(25 * 60);
    setLabel("Session"); 
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  }

  return (
    <div className="container">
      <audio id='beep' src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav" ref={audioRef}></audio>
      <div className="controls">
        <div className="break">
          <h1 id="break-label">Break Label</h1>
          <div className="break-controllers">
            <button id="break-decrement" onClick={(evt) => {
              if (!play && breakTime > 60)
                setBreakTime((prev) => (prev - 60));
            }}>-</button>
            <h1 id="break-length">{breakTime / 60}</h1>
            <button id='break-increment' onClick={(evt) => {
              if (!play && breakTime < 60 * 60)
                setBreakTime((prev) => (prev + 60));
            }}>+</button>
          </div>
        </div>

        <div className="session">
          <h1 id="session-label">Session Label</h1>
          <div className="session-controllers">
            <button id="session-decrement" onClick={(evt) => {
              if (!play && sessionTime > 60)
                setSessionTime((prev) => (prev - 60));
            }}>-</button>
            <h1 id="session-length">{sessionTime / 60}</h1>
            <button id='session-increment' onClick={(evt) => {
              if (!play && sessionTime < 60 * 60)
                setSessionTime((prev) => (prev + 60));
            }}>+</button>
          </div>
        </div>
      </div>

      <div className="clock">
        <h1 id="timer-label">{label}</h1>
        <h1 id="time-left">{time / 60 < 10 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60)}:{time % 60 < 10 ? `0${time % 60}` : time % 60}</h1>
        <div className="clock-controllers">
          <button id="start_stop" onClick={() => { setPlay(prev => (!prev)) }}>Start/Stop</button>
          <button id="reset" onClick={resetTime}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default App
