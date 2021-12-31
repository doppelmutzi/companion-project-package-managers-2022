import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import AppContext from "../AppContext";

const HeadlineContainer = styled.div`
  padding: 10px;
  text-align: center;
  background-color: ${(props) => (props.darkMode ? "silver" : "papayawhip")};
`;

const Headline = ({ children }) => {
  const { darkMode } = useContext(AppContext);
  return (
    <HeadlineContainer darkMode={darkMode}>
      <h1>{children}</h1>
    </HeadlineContainer>
  );
};
export default Headline;

Headline.propTypes = {
  children: PropTypes.node.isRequired,
};
