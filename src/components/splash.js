import React from 'react';
import styled from 'styled-components';
import WorkingImage from '../images/illustration-working.svg';
import ButtonRounded from '../components/button-rounded';


const DeskTopScreenSize = `700px`;

const SplashHolder = styled.section`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 0;

  @media only screen and (min-width: ${DeskTopScreenSize}) { 
    flex-direction: row-reverse;
    justify-content: flex-end;
    margin-bottom: 100px;
    max-width: 1034px;
    padding: 5% 0 0 5%;
  }

  @media only screen and (min-width: 1150px) {
    margin: 0 auto 100px auto;
    padding: 0;
  }

  @media only screen and (min-width: 1200px) { 
    margin-bottom: 250px;
  }
`;

const SplashText = styled.div`
  padding: 0 5%;
  text-align: center;
  margin-bottom: 125px;

  @media only screen and (min-width: ${DeskTopScreenSize}) { 
    margin-bottom: 50px;
    padding: 0 5% 0 0;
    text-align: left;
    width: 50%;
  }

  @media only screen and (min-width: 900px) {
    margin-bottom: 150px;
  }
`;

const SplashTextHeader = styled.h2`
  color: hsl(260, 8%, 14%);
  font-size: 4.2rem;
  font-weight: 700;
  margin: 0 auto;
  max-width: 420px;
  text-align: center;

  @media only screen and (min-width: ${DeskTopScreenSize}) {
    font-size: 4rem;
    margin: 1rem 0 0 0;
    text-align: left;
  }

  @media only screen and (min-width: 1100px) {
    font-size: 5.6rem;
  }
`;

const SplashTextTagline = styled.p`
  color: hsl(0, 0%, 75%);
  font-size: 1.8rem;
  line-height: 1.6;
  max-width: 520px;
`;

const SplashPicture = styled.div`
  background-image: url(${WorkingImage});
  background-repeat: no-repeat;
  background-size: 125%;
  height: 400px;
  margin-left: 5%;

  @media only screen and (min-width: 500px) {
    background-size: 115%;
  }

  @media only screen and (min-width: 550px) {
    background-size: 110%;
    padding-bottom: 0;
    height: 475px;
  }

  @media only screen and (min-width: ${DeskTopScreenSize}) { 
    height: 400px;
    position: absolute;
    right: 0;
    width: 50%;
  }

  @media only screen and (min-width: 1200px) {
    background-size: 110%;
    height: 600px;
  }

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