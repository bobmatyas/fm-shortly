import React from 'react';
import styled from 'styled-components';
import MobileBackgroundImage from '../images/bg-shorten-mobile.svg';

const ShortenerHolder = styled.div`
  background-color: hsl(257, 27%, 26%);
  background-image: url(${MobileBackgroundImage});
  background-position: top right;
  background-repeat: no-repeat;
  border-radius: 10px;
  margin: -160px auto 100px auto;
  padding: 2rem 0;
  text-align: center;
`;

const ShortenerLabel = styled.label`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

const ShortenerInput = styled.input`
  border-radius: 5px;
  color: hsl(0, 0%, 75%);
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  margin: 1rem;
  padding: 0.8rem;
  width: 80%;
`;

const ShortenerButton = styled.button`
  background-color: hsl(180, 66%, 49%);
  border-radius: 5px;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 1.8rem;
  font-weight: 800;
  margin: 1rem;
  padding: 0.8rem;
  width: 80%;
`;

function Shortener() {
  
  return (
    <ShortenerHolder>
      <ShortenerLabel htmlFor="shortenerUrl">Shorten a link here...</ShortenerLabel>
      <ShortenerInput 
        id="shortenerUrl"
        type="text"
        placeholder="Shorten a link here..."
      />
      <br />
      <ShortenerButton>Shorten It!</ShortenerButton>
    </ShortenerHolder>
  );
}

export default Shortener;