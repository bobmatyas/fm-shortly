import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../images/logo.svg';
import Menu from './menu';

const StyledHeader = styled.header`
  align-items: center;
  color: hsl(260, 8%, 14%);
  display: flex;
  justify-content: space-between;
  padding: 5%;
`;

const MenuButton = styled.button`
  cursor: pointer;
  margin: 0;
`;


function Header() {
  return (
    <StyledHeader>
      <h1>
        <Logo />
      </h1>
      <Menu />
      <MenuButton>Menu</MenuButton>
      
    </StyledHeader>
  );
}

export default Header;