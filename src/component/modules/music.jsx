import React, { useState, useRef } from "react";
import TimeSlider from "react-input-slider";
import PrevIcon from "../../assets/Icons/PrevIcon";
import NextIcon from "../../assets/Icons/NextIcon";
import PauseIcon from "../../assets/Icons/PauseIcon";
import PlayIcon from "../../assets/Icons/PlayIcon";
import sound from '../../assets/images/IDo.mp3'
import sound1 from '../../assets/images/yeuem.mp3'

const Music = () => {
  const images = {
    an: require('../../assets/images/logo-an&linh.png'),
  };
  const audios = [
    {
      src: sound,
      title: "I Do",
      artist: "911",
    },
    {
      src: sound1,
      title: "Yêu em hơn mỗi ngày",
      artist: "Andiez",
    }
  ];
  const audioRef = useRef();
  const [audioIndex, setAudioIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlay, setPlay] = useState(false);

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
    if (isPlay) audioRef.current.play();
  };

  const handlePausePlayClick = () => {
    if (isPlay) {
      audioRef.current.pause();

    } else {
      audioRef.current.play();
    }
    setPlay(!isPlay);
  };

  const handleTimeSliderChange = ({ x }) => {
    audioRef.current.currentTime = x;
    setCurrentTime(x);

    if (!isPlay) {
      setPlay(true);
      audioRef.current.play();
    }
  };

  return (
    <div className="Music">
      <div className="img-music">
      <img className="Song-Thumbnail" src={images.an} alt="tet" />
      <div className="song"></div>
      </div>
      <div className="singer-song">
        <h2 className="Song-Title">{audios[audioIndex].title}</h2>
        <p className="Singer">{audios[audioIndex].artist}</p>
        <TimeSlider
        axis="x"
        xmax={duration}
        x={currentTime}
        onChange={handleTimeSliderChange}
        styles={{
          track: {
            backgroundColor: "#e3e3e3",
            height: "2px",
          },
          active: {
            backgroundColor: "red",
            height: "2px",
          },
          thumb: {
            marginTop: "-3px",
            backgroundColor: "red",
          },
        }}
      />
      </div>
      <div className="Control-Button-Group">
        <div
          className="Prev-Button"
          onClick={() => setAudioIndex((audioIndex - 1) % audios.length)}
        >
          <PrevIcon className="icon-music-btn"/>
        </div>
        <div className="Pause-Play-Button" onClick={handlePausePlayClick}>
          {isPlay ? <PauseIcon className="icon-music-btn"/> : <PlayIcon className="icon-music-btn"/>}
        </div>
        <div
          className="Next-Button"
          onClick={() => setAudioIndex((audioIndex + 1) % audios.length)}
        >
          <NextIcon className="icon-music-btn"/>
        </div>
      </div>
    
      <audio
        ref={audioRef}
        src={audios[audioIndex].src}
        onLoadedData={handleLoadedData}
        onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
        onEnded={() => setPlay(false)}
      />
    </div>
  );
};

export default Music;
