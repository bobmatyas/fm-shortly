import React, { useRef } from 'react';
import styled from 'styled-components';


const desktopSize = `800px`;

const MenuHolder = styled.div`
  background-color: hsl(257, 27%, 26%); 
  border-radius: 10px;
  display: none;
  left: 0;
  margin: 0 5%;
  position: absolute;
  text-align: center;
  top: 80px;
  width: 90%;

  @media only screen and (min-width: ${desktopSize}) {
    align-items: center;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    margin: 0 0 0 5rem;
    position: static;
    width: 100%;
  }

`;

const MenuList = styled.ul`
  color: #fff;
  font-size: 1.8rem;
  list-style-type: none;
  margin: 2rem 0;
  padding: 0;

  @media only screen and (min-width: ${desktopSize}) {
    align-items: center;
    color: hsl(0, 0%, 75%);
    display: flex;
    font-size: 1.6rem;
    margin: 0;
  }

`;

const MenuListItem = styled.li`
  padding: 1.6rem 0;
  
  a:link, a:visited {
    color: #fff;
    text-decoration: none;
  }

  a:hover, a:active {
    color: #fff;
    text-decoration: none;
  }

  @media only screen and (min-width: ${desktopSize}) {
    font-weight: 700;
    padding: 0 2.25rem 0 0;

    a:link, a:visited {
      color: hsl(0, 0%, 75%);
      text-decoration: none;
    }
  
    a:hover, a:active {
      color: hsl(257, 27%, 26%);
      text-decoration: none;
    }

    :last-of-type {
      padding: 0;
    }
  }
`;

const MenuSeperator = styled.div`
  background-color: hsl(0, 0%, 75%);
  height: 1px;
  margin: 0 auto;
  width: 80%;
  
  @media only screen and (min-width: ${desktopSize}) {
    display: none;
  }
`;

const SignUpButton = styled.button`
  background-color: hsl(180, 66%, 49%);
  border: none;
  border-radius: 5rem;
  color: #fff;
  font-size: 1.8rem;
  font-weight: 700;
  padding: 1.5rem 2.8rem;
  width: 80%;

  :active {
    transform: translateY(4px);
  }

  :hover {
    background-color: #9be3e2;
    cursor: pointer;
  }

  @media only screen and (min-width: ${desktopSize}) {
    padding: 1rem 2rem;
    width: 100%;
  }
`;

const MenuButton = styled.button`
  background-color: #fff;
  border: none;
  color: hsl(0, 0%, 75%);
  cursor: pointer;
  font-size: 2rem;
  font-weight: 700;
  margin: -10px 0 0 0;
  padding: 0 10px;
  text-align: center;

  @media only screen and (min-width: ${desktopSize}) {
    display: none;
  }
`;

function Menu() {
  
  const menuVisible = useRef('');

  const showMenu = (e) => {
    menuVisible.current.classList.toggle('visible');
  }

  return (
    <>
    <MenuHolder ref={menuVisible}>
      <MenuList>
        <MenuListItem><a href="https://bobmatyas.github.io/fm-shortly/">Features</a></MenuListItem>
        <MenuListItem><a href="https://bobmatyas.github.io/fm-shortly/">Pricing</a></MenuListItem>
        <MenuListItem><a href="https://bobmatyas.github.io/fm-shortly/">Resources</a></MenuListItem>
      </MenuList>

      <MenuSeperator />

      <MenuList>
        <MenuListItem><a href="https://bobmatyas.github.io/fm-shortly/">Login</a></MenuListItem>
        <MenuListItem>
          <SignUpButton>Sign Up</SignUpButton>
        </MenuListItem>
      </MenuList>  
    </MenuHolder>

    <MenuButton onClick={showMenu} className="blah">&#9776;</MenuButton>
    </>
  );
}

export default Menu;