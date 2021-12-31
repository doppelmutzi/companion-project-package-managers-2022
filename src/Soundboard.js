import React, { useEffect, useRef, useReducer } from "react";
import styled from "styled-components";

import Headline from "./components/Headline";
import SoundItem from "./components/SoundItem-v2";

import Toggle from "./components/Toggle";
import NowPlaying from "./components/NowPlaying";
import Playback from "./components/Playback";
import FilterSounds from "./components/FilterSounds";

import AppContext from "./AppContext";
import reducer, { getInitialState } from "./reducer";
import useFetch from "./hooks/useFetch";

const SoundboardContainer = styled.div`
  margin: 5px;

  > * + * {
    margin-top: 10px;
  }

  background-color: ${(props) => (props.darkMode ? "black" : "inherit")};
  color: ${(props) => (props.darkMode ? "white" : "inherit")};
`;

const Soundboard = () => {
  const [mp3s, error] = useFetch("http://localhost:4000/sounds.json");
  useEffect(() => {
    dispatch({ type: "SET_SOUNDS", sounds: mp3s });
  }, [mp3s]);

  const [state, dispatch] = useReducer(reducer, getInitialState());
  const { darkMode, currentSound, sounds } = state;

  const lastSoundRef = useRef();
  useEffect(() => {
    if (currentSound) lastSoundRef.current = currentSound.label;
  }, [currentSound]);

  return (
    <AppContext.Provider value={{ darkMode, currentSound, sounds, dispatch }}>
      <SoundboardContainer darkMode={darkMode}>
        <Toggle
          id="toggle-dark-mode"
          onToggle={() => {
            dispatch({ type: "TOGGLE_DARK_MODE", darkMode: !darkMode });
          }}
        >
          dark mode
        </Toggle>
        <Headline>Sound Board</Headline>
        <NowPlaying current={currentSound?.label} last={lastSoundRef.current} />
        <Playback />
        <FilterSounds />

        {error ? (
          <div>Sounds konnten leider nicht geladen werden</div>
        ) : (
          sounds.map((mp3) => (
            <SoundItem darkMode={darkMode} mp3={mp3} key={mp3.file} />
          ))
        )}
      </SoundboardContainer>
    </AppContext.Provider>
  );
};

export default Soundboard;
