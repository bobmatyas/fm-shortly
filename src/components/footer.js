import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../images/logo.svg';
import SocialList from '../components/social-list';

const fontSize = 1.6;

const StyledFooter = styled.footer`
  background-color: hsl(260, 8%, 14%);
  margin: 0;
  padding: 5%;
  text-align: center;
`;

const FooterInfo = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1034px;

  @media only screen and (min-width: 800px) { 
    align-items: flex-start;
    flex-direction: row;
  }
`;

const LogoHolder = styled.div`
  color: #fff;
  margin: 5.5rem 0;

  @media only screen and (min-width: 800px) {
    margin: 0;
  }
`;

const List = styled.ul`
  font-size: ${fontSize}rem;
  color: hsl(0, 0%, 75%);
  list-style-type: none;
  margin: 0 0 2.2rem 0;
  padding: 0;

  li {
    margin: 1.5rem 0;
    
    a:link, a:visited {
      color: hsl(0, 0%, 75%);
      text-decoration: none;
    }

    a:hover, a:active {
      color: #9be3e2;
    }
  }

  @media only screen and (min-width: 800px) {
    margin: 0;
    text-align: left;
  }
`;

const FooterHeader = styled.h3`
  font-size: ${fontSize}rem;
  color: #fff;
  margin: 0
  padding: 3rem 0 1.5rem 0;
  text-align: center;

  @media only screen and (min-width: 800px) {
    padding: 0 0 1.5rem 0;
    text-align: left;
  }
`;

const FooterMenus = styled.div`
  @media only screen and (min-width: 800px) {
    display: flex;
    justify-content: space-around;
    width: 75%;
  }
`;

const Attribution = styled.div`
  color: #fff;
  font-size: 11px; 
  margin: 5rem auto;
  text-align: center;

  a { 
    color: #fff; 
  }
  
  a:hover {
    text-decoration: none;
  }
`;

function Footer() {
  return (
    <StyledFooter>

      <FooterInfo>

        <LogoHolder>
          <Logo />
        </LogoHolder>

        <FooterMenus>
          <div>
            <FooterHeader>Features</FooterHeader>

            <List>
              <li><a href="https://bobmatyas.github.io/fm-shortly">Link Shortening</a></li>
              <li><a href="https://bobmatyas.github.io/fm-shortly">Branded Links</a></li>
              <li><a href="https://bobmatyas.github.io/fm-shortly">Analytics</a></li>
            </List>
          </div>

          <div>
            <FooterHeader>Resources</FooterHeader>

            <List>
              <li><a href="https://bobmatyas.github.io/fm-shortly">Blog</a></li>
              <li><a href="https://bobmatyas.github.io/fm-shortly">Developers</a></li>
              <li><a href="https://bobmatyas.github.io/fm-shortly">Support</a></li>
            </List>
          </div>

          <div>
            <FooterHeader>Company</FooterHeader>

            <List>
              <li><a href="https://bobmatyas.github.io/fm-shortly">About</a></li>
              <li><a href="https://bobmatyas.github.io/fm-shortly">Our Team</a></li>
              <li><a href="https://bobmatyas.github.io/fm-shortly">Careers</a></li>
              <li><a href="https://bobmatyas.github.io/fm-shortly">Contact</a></li>
            </List>
          </div>

          <SocialList />

        </FooterMenus>

      </FooterInfo>

      <Attribution>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.<br />
        Coded by <a href="https://www.bobmatyas.com">Bob Matyas</a>.
      </Attribution>

    </StyledFooter>
  );
}

export default Footer;