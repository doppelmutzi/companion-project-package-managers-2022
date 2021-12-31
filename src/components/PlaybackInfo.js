import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.h3`
  font-size: 1.1em;
  text-align: center;
`;

const PlaybackInfo = ({ children }) => {
  return <Container>{children}</Container>;
};

export default PlaybackInfo;

PlaybackInfo.propTypes = {
  children: PropTypes.node,
};
