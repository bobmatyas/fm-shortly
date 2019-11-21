import React from 'react';
import styled from 'styled-components';
import FeatureCard from './feature-card';
import FeatureSpacer from './feature-spacer';
import Shortener from './shortener';

const desktopSize = `1034px`;

const FeaturesSection = styled.section`
  background-color: hsl(230, 2%, 96%);
  margin: 0;
  padding: 8rem 5%;
`;

const FeaturesHeader = styled.h2`
  color: hsl(260, 8%, 14%);
  font-size: 2.8rem;
  font-weight: 700;
  letter-spacing: -2px;
  text-align: center;

  @media only screen and (min-width: 500px) {
    font-size: 4.2rem;
    margin: 100px auto 1.5rem auto;
  }
  
`;

const FeaturesText = styled.p`
  color: hsl(0, 0%, 75%);
  font-size: 1.6rem;
  line-height: 2;
  margin: 0 0 8.2rem 0;
  text-align: center;

  @media only screen and (min-width: 500px) {
    font-size: 1.8rem;
    max-width: 525px;
    margin: 0 auto;
    padding: 0 0 100px 0;
  }
`;

const FeatureCardHolder = styled.div`  

  @media only screen and (min-width: ${desktopSize}) {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: -100px;
    width: 100%;
  }
`;

function Features() {
  return (
    <FeaturesSection>

      <Shortener />

      <FeaturesHeader>Advanced Statistics</FeaturesHeader>

      <FeaturesText>
        Track how your links are performing across the web with our advanced statistics dashboard.
      </FeaturesText>

      <FeatureCardHolder>

      <FeatureCard
        icon="iconBrand"      
        title="Brand Recognition"
        text="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
      />

      <FeatureSpacer />

      <FeatureCard
        icon="iconDetailed"
        title="Detailed Records"
        text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        styleByPosition="card-2"
      />

      <FeatureSpacer />

      <FeatureCard
        icon="iconFully"
        title="Fully Customizable"
        text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
        styleByPosition="card-3"
      />
      </FeatureCardHolder>
    </FeaturesSection>
  );
}

export default Features;