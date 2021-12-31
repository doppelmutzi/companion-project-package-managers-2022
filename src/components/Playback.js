import React, { useContext } from "react";
import styled from "styled-components";

import AppContext from "../AppContext";

const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > * + * {
    margin-left: 10px;
  }
`;

const Control = styled.div`
  cursor: pointer;
  font-size: ${(props) => (props.primary ? "3em" : "2em")};
`;

const Playback = () => {
  const { dispatch, sounds, currentSound } = useContext(AppContext);
  return (
    <Controls>
      <Control
        onClick={() => {
          if (!currentSound) return;
          let prevIndex =
            sounds.findIndex((sound) => sound.label === currentSound.label) - 1;
          if (prevIndex <= 0) prevIndex = 0;
          const soundToPlay = {
            ...sounds[prevIndex],
            playback: "play",
          };
          dispatch({ type: "UPDATE_PLAYBACK", currentSound: soundToPlay });
        }}
      >
        ⏮️
      </Control>
      <Control
        primary
        onClick={() => {
          let soundToPlay;
          if (!currentSound) soundToPlay = { ...sounds[0], playback: "play" };
          else {
            soundToPlay = null;
          }
          dispatch({ type: "UPDATE_PLAYBACK", currentSound: soundToPlay });
        }}
      >
        {!currentSound ? "▶️" : "⏹️"}
      </Control>
      <Control
        onClick={() => {
          if (!currentSound) return;
          const numberSounds = sounds.length;
          let nextIndex =
            sounds.findIndex((sound) => sound.label === currentSound.label) + 1;
          if (nextIndex >= sounds.length) nextIndex = sounds[numberSounds - 1];
          const soundToPlay = {
            ...sounds[nextIndex],
            playback: "play",
          };
          dispatch({ type: "UPDATE_PLAYBACK", currentSound: soundToPlay });
        }}
      >
        ⏭️
      </Control>
    </Controls>
  );
};

export default Playback;
