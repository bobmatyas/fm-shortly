import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import MobileBackgroundImage from '../images/bg-shorten-mobile.svg';
import ShortenerResult from './shortener-result';

const ShortenerHolder = styled.div`
  background-color: hsl(257, 27%, 26%);
  background-image: url(${MobileBackgroundImage});
  background-position: top right;
  background-repeat: no-repeat;
  border-radius: 10px;
  margin: -160px auto 1.5rem auto;
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
  

  const [links, setLinks] = useState([]);

  const getShortLink = (url) => {
    axios({
      method: 'post',
      url: 'https://rel.ink/api/links/',
      data: {
        url: url
      }
    })
    .then(function (response) {
      const newLink = {
        'originalUrl': response.data.url,
        'newUrl': `http://rel.ink/${response.data.hashid}`,
      };
      setLinks([...links, newLink]);
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  useEffect(() => {  
  
  });

  return (
    <>
      <ShortenerHolder>
        <ShortenerLabel htmlFor="shortenerUrl">Shorten a link here...</ShortenerLabel>

        <ShortenerInput 
          id="shortenerUrl"
          type="text"
          placeholder="Shorten a link here..."
        />
        <br />
        <ShortenerButton onClick={() => getShortLink('https://www.aol.com')}>Shorten It!</ShortenerButton>
      </ShortenerHolder>

      {links.map((link, index) => (
        <ShortenerResult 
          key= {index}
          originalUrl= {link.originalUrl}
          shortenedUrl= {link.newUrl}
        />
      ))}
    </>
  );
}

export default Shortener;