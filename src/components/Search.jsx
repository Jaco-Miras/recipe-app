import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FormStyle = styled.form`
  margin: 0rem 10rem;

  div {
    width: 100%;
    position: relative;
  }

  input {
    border: none;
    background: lightgrey;
    font-size: 1.5rem;
    padding: 1rem 3rem;
    width: 100%;
    border-radius: 1rem;
    outline: none;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
  }
`;

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
    console.log("hey", input);
  };
  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
    </FormStyle>
  );
}

export default Search;
