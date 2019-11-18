import React from 'react';
import styled from 'styled-components';


const fontSize = 1.6;

const ShortenedLinkBox = styled.div`
  background-color: #fff;
  border-radius: 5px;
`;

const OriginalLink = styled.p`
  border-bottom: 1px solid #eee;
  color: hsl(257, 27%, 26%);
  font-size: ${fontSize}rem;
  margin: 0;
  padding: 15px 15px 10px 15px;
`;

const ShortenedLink = styled.p`
  color: hsl(180, 66%, 49%);
  font-size: ${fontSize}rem;
  margin: 0;
  padding: 15px;
`;

const CopyLinkButtonHolder = styled.div`
  padding-bottom: 15px;
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
`;

function ShortenerResult({ originalUrl, shortenedUrl }) {
  
  return (
    <ShortenedLinkBox>
      <OriginalLink>{ originalUrl }</OriginalLink>
      <ShortenedLink>{ shortenedUrl }</ShortenedLink>
      <CopyLinkButtonHolder>
        <CopyLinkButton>Copy</CopyLinkButton>
      </CopyLinkButtonHolder>
    </ShortenedLinkBox> 
  );
}

export default ShortenerResult;