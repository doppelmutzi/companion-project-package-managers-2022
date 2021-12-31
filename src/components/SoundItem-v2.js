import React, { useState, useEffect, useRef, useContext } from "react";
import PropTypes from "prop-types";

// emojis symbols https://emojipedia.org/symbols/
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
// https://www.w3schools.com/tags/ref_av_dom.asp
import AppContext from "../AppContext";
import styled from "styled-components";

const ClickableWithFeedback = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  border: ${(props) =>
    props.isPlaying ? "3px solid green" : "1px solid gray"};
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  background: ${(props) => (props.darkMode ? "black" : "inherit")};
  color: ${(props) => (props.darkMode ? "white" : "inherit")};
`;

const SoundItem = ({ mp3 }) => {
  const { darkMode, currentSound, dispatch } = useContext(AppContext);

  const [userHovers, setUserHovers] = useState(false);
  const [playback, setPlayback] = useState("stop");

  const audioRef = useRef(new Audio(mp3.file));
  useEffect(() => {
    audioRef.current.onended = function () {
      setPlayback("stop");
      dispatch({
        type: "UPDATE_PLAYBACK",
        currentSound: null,
      });
    };

    return () => {
      // stop sound on unmount
      stop();
      dispatch({
        type: "UPDATE_PLAYBACK",
        currentSound: null,
      });
    };
  }, []);

  function play() {
    audioRef.current.play();
  }

  function stop() {
    const audio = audioRef.current;
    audio.pause();
    audio.currentTime = 0;
  }

  useEffect(() => {
    if (mp3.label === "Buli") console.log("Buli", currentSound);
    const noSoundPlaying = !currentSound;
    if (noSoundPlaying) {
      setPlayback("stop");
    } else {
      // playback change of this sound
      if (currentSound.label === mp3.label) {
        if (currentSound.playback === "play") {
          if (playback !== "play") {
            setPlayback("play");
          }
        }
      }
      // playback change of other sound
      else {
        setPlayback("stop");
      }
    }
  }, [currentSound]);

  useEffect(() => {
    if (playback === "play") play();
    else stop();
  }, [playback]);

  return (
    <ClickableWithFeedback
      darkMode={darkMode}
      isPlaying={playback === "play"}
      onClick={() => {
        if (playback !== "play") {
          setPlayback("play");
          dispatch({
            type: "UPDATE_PLAYBACK",
            currentSound: {
              ...mp3,
              playback: "play",
            },
          });
        } else {
          setPlayback("stop");
          dispatch({
            type: "UPDATE_PLAYBACK",
            currentSound: null,
          });
        }
      }}
      onMouseEnter={() => setUserHovers(true)}
      onMouseLeave={() => setUserHovers(false)}
    >
      <span>
        {mp3.label}
        {playback !== "play" && userHovers && " ▶️"}
        {playback === "play" && " 🎵"}
      </span>
    </ClickableWithFeedback>
  );
};

export default SoundItem;

SoundItem.propTypes = {
  mp3: PropTypes.shape({
    file: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }),
};
