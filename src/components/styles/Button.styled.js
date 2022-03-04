import styled from "styled-components";

export const Button = styled.button`
  border-radius: 3.125em;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, .15);
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  padding: 1em 3.75em;
  background-color: ${({ bg }) => bg || '#fff'};
  color: ${({ color }) => color || '#fff'};

  &:hover {
    opacity: .9;
    transform: scale(.98);
  }

`