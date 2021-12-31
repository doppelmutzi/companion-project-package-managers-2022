import React from "react";
import PropTypes from "prop-types";
import PlaybackInfo from "./PlaybackInfo";
const NowPlaying = ({ current, last }) => {
  return (
    <>
      <PlaybackInfo>{`now playing: ${current || ""}`}</PlaybackInfo>
      <PlaybackInfo>{`last played: ${last || ""}`}</PlaybackInfo>
    </>
  );
};

NowPlaying.propTypes = {
  current: PropTypes.string,
  last: PropTypes.string,
};

export default NowPlaying;
