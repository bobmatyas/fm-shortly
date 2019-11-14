import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../images/logo.svg';

const StyledHeader = styled.header`
  background-color: #eee;
`;


function Header() {
  return (
    <StyledHeader>
      <h1>
        <Logo />
      </h1>
    </StyledHeader>
  );
}

export default Header;