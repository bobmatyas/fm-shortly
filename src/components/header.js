import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../images/logo.svg';
import Menu from './menu';

const desktopSize = `800px`;

const StyledHeader = styled.header`
  align-items: center;
  color: hsl(260, 8%, 14%);
  display: flex;
  justify-content: space-between;
  max-width: 1034px;
  padding: 5%;

  @media only screen and (min-width: 1160px) { 
    margin: 0 auto;
    padding: 5% 0;
  }

`;

const LogoHolder = styled.h1`
  margin: 0;

  @media only screen and (min-width: ${desktopSize}) {
    margin-top: 5px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <LogoHolder>
        <Logo />
      </LogoHolder>

      <Menu /> 
      
    </StyledHeader>
  );
}

export default Header;