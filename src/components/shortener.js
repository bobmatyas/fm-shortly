import React, { useState, useEffect, useRef } from 'react';
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
  border: none;
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
  border: none;
  border-radius: 5px;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 1.8rem;
  font-weight: 800;
  margin: 1rem;
  padding: 0.8rem;
  width: 80%;

  :active {
    transform: translateY(4px);
  }

  :hover {
    background-color: #9be3e2;
    cursor: pointer;
  }
`;

const ErrorMessageDisplay = styled.p`
  color: hsl(0, 87%, 67%);
  display: none;
  font-size: 1.6rem;
  font-style: italic;
  margin: 0 0 0 3rem;
  text-align: left;
  width: 80%;
`;

function Shortener() {
  

  const [links, setLinks] = useState([]);

  const [input, setInput] = useState('');

  const error = useRef('');

  const shortenInput = useRef('');

  const validateUrl = (url) => {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(url);
  }

  const checkLink = (e) => {
    e.preventDefault();
    if (validateUrl(input) === true) {
      error.current.classList.remove('visible');
      shortenInput.current.classList.remove('alert');
      getShortLink(input);
    } else {
      error.current.classList.add('visible');
      shortenInput.current.classList.add('alert');
      error.current.textContent = 'Please enter a valid link...'     
    }  
  }

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
      setInput('');
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
        <form onSubmit={checkLink }>
        <ShortenerLabel htmlFor="shortenerUrl">Shorten a link here...</ShortenerLabel>

        <ShortenerInput
          value={input} 
          ref={shortenInput}
          onChange={e => setInput(e.target.value)}
          id="shortenerUrl"
          type="text"
          placeholder="Shorten a link here..."
        />
        <ErrorMessageDisplay
          ref={error}
        />
        <br />
        <ShortenerButton type="submit">Shorten It!</ShortenerButton>
        </form>
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