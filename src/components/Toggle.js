import React from "react";
import { func, node, string } from "prop-types";
import styled from "styled-components";

// CSS -> Styled-Components cheat sheet https://jsramblings.com/migrating-to-styled-components-cheatsheet/

const Label = styled.label`
  color: orange;
  cursor: pointer;
`;

const Input = styled.input`
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  > ${Label} {
    margin-right: 5px;
  }
`;

const Toggle = ({ onToggle, children, id }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{children}</Label>
      <Input id={id} type="checkbox" onChange={onToggle}></Input>
    </Wrapper>
  );
};

Toggle.propTypes = {
  onToggle: func.isRequired,
  children: node.isRequired,
  id: string.isRequired,
};

export default Toggle;
