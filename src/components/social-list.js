import React from 'react';
import styled from 'styled-components';
import { ReactComponent as IconFacebook } from '../images/icon-facebook.svg';
import { ReactComponent as IconTwitter } from '../images/icon-twitter.svg';
import { ReactComponent as IconPinterest } from '../images/icon-pinterest.svg';
import { ReactComponent as IconInstagram } from '../images/icon-instagram.svg';

const IconList = styled.ul`
  align-items: center;
  color: #fff;
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 5rem auto 0 auto;
  padding: 0;

  li {
    margin: 0 1.5rem;
  }

  svg :hover {
    color: #9be3e2;
    cursor: pointer;
  }

  @media only screen and (min-width: 800px) {
    align-items: flex-start;
    margin: 0;
    padding: 0;
  }

`;

function SocialList() {
  return (
    <IconList>
      <li><IconFacebook /></li>
      <li><IconTwitter /></li>
      <li><IconPinterest /></li>
      <li><IconInstagram /></li>
    </IconList>
  );
}

export default SocialList;