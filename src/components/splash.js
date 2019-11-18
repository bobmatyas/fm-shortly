import React from 'react';
import styled from 'styled-components';
import WorkingImage from '../images/illustration-working.svg';
import ButtonRounded from '../components/button-rounded';

const SplashHolder = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 5%;
`;

const SplashText = styled.div`
  padding: 0 5% 0 0;
  text-align: center;
  margin-bottom: 150px;
`;

const SplashTextHeader = styled.h2`
  color: hsl(260, 8%, 14%);
  font-size: 4.2rem;
  font-weight: 700;
  margin: 0 auto;
  text-align: center;
`;

const SplashTextTagline = styled.p`
  color: hsl(0, 0%, 75%);
  font-size: 1.8rem;
  line-height: 1.6;
`;

const SplashPicture = styled.div`
  background-image: url(${WorkingImage});
  background-repeat: no-repeat;
  background-size: 125%;
  height: 338px;
`;

function Splash() {
  return (
    <SplashHolder>

      <SplashPicture />

      <SplashText>
        <SplashTextHeader>More than just shorter links</SplashTextHeader>
    
        <SplashTextTagline>
          Build your brand’s recognition and get detailed insights on how your links are performing.
        </SplashTextTagline>

        <ButtonRounded text="Get Started">Get Started</ButtonRounded>
      </SplashText>

    </SplashHolder>
  );
}

export default Splash;