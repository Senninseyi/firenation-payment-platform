import styled from "styled-components";

export const CustomInput = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  outline: none;
  font-weight: 500;
  color: #ffffff;
  box-shadow: none;
  background-color: #da0714;
  width: 100%;
  font-family: Montserrat, sans-serif;
  letter-spacing: 0.06em;
  border: 2px solid black;
  &:hover {
    border: 2px solid #da0714;
    box-shadow: none;
  }
  &:focus {
    border: 2px solid #da0714;
    box-shadow: none;
    &:active {
      border: 2px solid #da0714;
      box-shadow: none;
    }
    &:disabled {
      background-color: #ffffff;
    }
  }
  &:disabled {
    background-color: #da0714;
    color: white;
  }
`;
