import React, { useState, useRef } from "react";

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const [playbackRate, setPlaybackRate] = useState(1);

  const play = () => {
    audioRef.current.play();
  };

  const pause = () => {
    audioRef.current.pause();
  };

  const increaseSpeed = () => {
    setPlaybackRate((prevRate) => prevRate + 0.25);
    audioRef.current.playbackRate += 0.25;
  };

  const resetSpeed = () => {
    setPlaybackRate(1);
    audioRef.current.playbackRate = 1;
  };

  return (
    <div>
      <audio ref={audioRef} src={src} playbackRate={playbackRate}></audio>
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
      <button onClick={increaseSpeed}>Aumentar Velocidade</button>
      <button onClick={resetSpeed}>Velocidade padrão</button>
    </div>
  );
};

export default AudioPlayer;
