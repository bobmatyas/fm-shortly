import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: hsl(180, 66%, 49%);
  border: none;
  border-radius: 5rem;
  color: #fff;
  font-size: 1.8rem;
  margin: 1.5rem auto 0 auto;
  padding: 1.5rem 2.5rem;
  text-align: center;

  :hover {
    cursor: pointer;
  }
`;

function ButtonRounded(props) {
  return (
    <Button>{props.text}</Button>
  );
}

export default ButtonRounded;