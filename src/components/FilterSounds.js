import React, { useState, useContext } from "react";
import styled from "styled-components";

import AppContext from "../AppContext";

const InputField = styled.div`
  display: flex;
  align-items: center;
  > * + * {
    margin-left: 5px;
  }
`;

const FilterSounds = () => {
  const { dispatch } = useContext(AppContext);
  const [value, setValue] = useState("");

  function handleChange(evt) {
    const filter = evt.target.value;
    setValue(filter);
    if (filter === "") {
      dispatch({ type: "RESET_FILTER" });
    } else {
      dispatch({ type: "SET_FILTER", filter });
    }
  }

  return (
    <InputField>
      <label htmlFor="filter">Filter sounds</label>
      <input id="filter" type="text" value={value} onChange={handleChange} />
    </InputField>
  );
};

export default FilterSounds;
