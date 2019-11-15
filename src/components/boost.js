import React from 'react';
import styled from 'styled-components';
import MobileBackgroundImage from '../images/bg-boost-mobile.svg';
import ButtonRounded from '../components/button-rounded';


const BoostSection = styled.section`
  background-color: hsl(257, 27%, 26%); 
  background-image: url(${MobileBackgroundImage});
  background-repeat: no-repeat;
  padding: 8% 5%;
  text-align: center;
`;

const BoostHeader = styled.h2`
  color: #fff;
  font-size: 2.9rem;
  margin: 7rem auto 0 auto;
  text-align: center;
`;

const ButtonHolder = styled.div`
  margin-bottom: 7rem;
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