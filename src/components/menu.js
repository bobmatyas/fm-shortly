import React from 'react';
import styled from 'styled-components';


const MenuHolder = styled.div`
  background-color: hsl(257, 27%, 26%); 
  border-radius: 10px;
  left: 0;
  margin: 0 5%;
  position: absolute;
  text-align: center;
  top: 80px;
  width: 90%;
`;

const MenuList = styled.ul`
  color: #fff;
  font-size: 1.8rem;
  list-style-type: none;
  margin: 2rem 0;
  padding: 0;
`;

const MenuListItem = styled.li`
  padding: 1.6rem 0;
`;

const MenuSeperator = styled.hr`
  background-color: hsl(0, 0%, 75%);
  height: 1px;
  width: 80%;
`;

const SignUpButton = styled.button`
  background-color: hsl(180, 66%, 49%);
  border-radius: 5rem;
  color: #fff;
  font-size: 1.8rem;
  font-weight: 700;
  padding: 1.5rem 2.8rem;
  width: 80%;
`;

function Menu() {
  
  return (
    <MenuHolder>
      <MenuList>
        <MenuListItem>Features</MenuListItem>
        <MenuListItem>Pricing</MenuListItem>
        <MenuListItem>Resources</MenuListItem>
      </MenuList>

      <MenuSeperator />

      <MenuList>
        <MenuListItem>Login</MenuListItem>
        <MenuListItem>
          <SignUpButton>Sign Up</SignUpButton>
        </MenuListItem>
      </MenuList>  
  </MenuHolder>
  );
}

export default Menu;