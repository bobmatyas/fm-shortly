import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import {CopyToClipboard} from 'react-copy-to-clipboard';
 
const fontSize = 1.6;
const desktopSize = `700px`;


const ShortenedLinkBox = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  max-width: 1034px;

  @media only screen and (min-width: ${desktopSize}) {
    flex-direction: row;
    justify-content: space-between;
    margin: 10px auto;
    padding: 2.5%;
  }

`;

const OriginalLink = styled.p`
  border-bottom: 1px solid #eee;
  color: hsl(257, 27%, 26%);
  font-size: ${fontSize}rem;
  margin: 0;
  padding: 15px 15px 10px 15px;

  @media only screen and (min-width: ${desktopSize}) {
    border-bottom: none;
    padding: 0;
  }
`;

const ShortenedLink = styled.p`
  background-color: #fff;
  border: none;
  color: hsl(180, 66%, 49%);
  font-size: ${fontSize}rem;
  margin: 0;
  padding: 15px;
`;

const CopyLinkHolder = styled.div`

  margin: 0;
  padding: 0;

  @media only screen and (min-width: ${desktopSize}) {
    align-items: center;
    display: flex;
    flex-direction: row;
  }

`;

const CopyLinkButtonHolder = styled.div`
  padding-bottom: 15px;

  @media only screen and (min-width: ${desktopSize}) {
    padding: 0;
  }
`;

const CopyLinkButton = styled.button`
  background-color: hsl(180, 66%, 49%);
  border: none;
  border-radius: 5px;
  color: #fff;
  display: block;
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0 auto;
  padding: 10px;
  text-align: center;
  width: 92%;

  :active {
    transform: translateY(4px);
  }

  :hover {
    background-color: #9be3e2;
    cursor: pointer;
  }

  @media only screen and (min-width: ${desktopSize}) {
    padding: 8px 20px;
    width: 100%;
  }
`;

function ShortenerResult({ originalUrl, shortenedUrl }) {
  
  const [copySuccess, setCopySuccess] = useState('Copy');
  const shortenedRef = useRef(null);
  const copyLink = useRef(null);

  function copyToClipboard() {
    setCopySuccess('Copied!');
    copyLink.current.classList.add('copied');
  };

  return (
    <ShortenedLinkBox>
      <OriginalLink>{ originalUrl }</OriginalLink>
      <CopyLinkHolder>
      <ShortenedLink ref={shortenedRef}>{shortenedUrl}</ShortenedLink>
      <CopyLinkButtonHolder>
      <CopyToClipboard 
        text={shortenedUrl}
        onCopy={() => copyToClipboard()}>
        <CopyLinkButton ref={copyLink}>{copySuccess}</CopyLinkButton>
      </CopyToClipboard>
      </CopyLinkButtonHolder>
      </CopyLinkHolder>
    </ShortenedLinkBox> 
  );
}

export default ShortenerResult;