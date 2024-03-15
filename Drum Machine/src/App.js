import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState("");
  const sound = useRef();
  const sound1 = useRef();
  const sound2 = useRef();
  const sound3 = useRef();
  const sound4 = useRef();
  const sound5 = useRef();
  const sound6 = useRef();
  const sound7 = useRef();
  const sound8 = useRef();
  const displayRef = useRef();

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      console.log(e.key);
      if (e.key === 'q' || e.key === 'Q') {
        playMusic(sound.current.innerHTML, e.key.toUpperCase());//("Heater-1",'Q');
      }
      else if (e.key === 'w' || e.key === 'W') {
        playMusic(sound1.current.innerHTML, e.key.toUpperCase());//("Heater-2",'W');
      }
      else if (e.key === 'e' || e.key === 'E') {
        playMusic(sound2.current.innerHTML, e.key.toUpperCase());//("Heater-3",'E');
      }
      else if (e.key === 'a' || e.key === 'A') {
        playMusic(sound3.current.innerHTML, e.key.toUpperCase());//("Heater-4",'A');
      }
      else if (e.key === 's' || e.key === 'S') {
        playMusic(sound4.current.innerHTML, e.key.toUpperCase());//("Clap",'S');
      }
      else if (e.key === 'D' || e.key === 'd') {
        playMusic(sound5.current.innerHTML, e.key.toUpperCase());//("Open-HH",'D');
      }
      else if (e.key === 'z' || e.key === 'Z') {
        playMusic(sound6.current.innerHTML, e.key.toUpperCase());//("Kick-n'-Hat",'Z')
      }
      else if (e.key === 'x' || e.key === 'X') {
        playMusic(sound7.current.innerHTML, e.key.toUpperCase());//("Kick",'X')
      }
      else if (e.key === 'c' || e.key === 'C') {
        playMusic(sound8.current.innerHTML, e.key.toUpperCase());//("Closed-HH",'C')
      }
    })
  }, [])
  function playMusic(title, song) {
    let music = document.getElementById(song);
    music.play();
    setDisplay(title);
    displayRef.current.style.border = "1px solid #A0FC24";
    displayRef.current.style.padding = "1%";
  }

  return (
    <div className='container'>
      <h1>DRUM MACHINE</h1>
      <div id='drum-machine'>
        <div id='display' ref={displayRef}>{display}</div>
        <div className='buttons'>
          <div className='drum-pad' id='Heater-1' onClick={() => { playMusic(sound.current.innerHTML, sound.current.id) }}>
            Q
            <audio className='clip' id='Q' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' ref={sound}>Heater-1</audio>
          </div>
          <div className='drum-pad' id='Heater-2' onClick={() => { playMusic(sound1.current.innerHTML, sound1.current.id) }}>
            W
            <audio className='clip' id='W' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' ref={sound1}>Heater-2</audio>
          </div>
          <div className='drum-pad' id='Heater-3' onClick={() => { playMusic(sound2.current.innerHTML, sound2.current.id) }}>
            E
            <audio className='clip' id='E' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' ref={sound2}>Heater-3</audio>
          </div>
          <div className='drum-pad' id='Heater-4' onClick={() => { playMusic(sound3.current.innerHTML, sound3.current.id) }}>
            A
            <audio className='clip' id='A' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' ref={sound3}>Heater-4</audio>
          </div>
          <div className='drum-pad' id='Clap' onClick={() => { playMusic(sound4.current.innerHTML, sound4.current.id) }}>
            S
            <audio className='clip' id='S' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' ref={sound4}>Clap</audio>
          </div>
          <div className='drum-pad' id='Open-HH' onClick={() => { playMusic(sound5.current.innerHTML, sound5.current.id) }}>
            D
            <audio className='clip' id='D' src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' ref={sound5}>Open-HH</audio>
          </div>
          <div className='drum-pad' id="Kick-n'-Hat" onClick={() => { playMusic(sound6.current.innerHTML, sound6.current.id) }}>
            Z
            <audio className='clip' id='Z' src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' ref={sound6}>Kick-n' -Hat</audio>
          </div>
          <div className='drum-pad' id='Kick' onClick={() => { playMusic(sound7.current.innerHTML, sound7.current.id) }}>
            X
            <audio className='clip' id='X' src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' ref={sound7}>Kick</audio>
          </div>
          <div className='drum-pad' id='Closed-HH' onClick={() => { playMusic(sound8.current.innerHTML, sound8.current.id) }}>
            C
            <audio className='clip' id='C' src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' ref={sound8}>Closed-HH</audio>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
