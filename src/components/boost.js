import React from 'react';
import styled from 'styled-components';
import MobileBackgroundImage from '../images/bg-boost-mobile.svg';
import DesktopBackgroundImage from '../images/bg-boost-desktop.svg';
import ButtonRounded from '../components/button-rounded';


const BoostSection = styled.section`
  align-items: center;
  background-color: hsl(257, 27%, 26%); 
  background-image: url(${MobileBackgroundImage});
  background-position: top right;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: center;
  padding: 0 5%;
  text-align: center;

  @media only screen and (min-width: 376px) {
    background-image: url(${DesktopBackgroundImage});
    height: 250px;
  }
`;

const BoostHeader = styled.h2`
  color: #fff;
  font-size: 2.6rem;
  margin: 0 auto 0 auto;
  text-align: center;
`;

const ButtonHolder = styled.div`
`;

function Boost() {
  return (
    <BoostSection>
      <BoostHeader>Boost your links today</BoostHeader>

        <ButtonHolder>
          <ButtonRounded text="Get Started" />
        </ButtonHolder>

    </BoostSection>
  );
}

export default Boost;