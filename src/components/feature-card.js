import React from 'react';
import styled from 'styled-components';
import { ReactComponent as IconBrand } from './../images/icon-brand-recognition.svg';
import { ReactComponent as IconDetailed } from './../images/icon-detailed-records.svg';
import { ReactComponent as IconFully } from './../images/icon-fully-customizable.svg';

const desktopSize = `1034px`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 5px;
  margin: 0 auto;
  max-width: 325px
  padding: 45px;

  @media only screen and (min-width: ${desktopSize}) {
    margin: 0;
    width: 350px;
    padding: 35px;
  }

`;

const CardIcon = styled.div`
  background-color: hsl(257, 27%, 26%);
  border-radius: 50%;
  height: 90px;
  margin: 0 auto;
  margin-top: -90px;
  padding: 25px 0;
  text-align: center;
  width: 90px;

  @media only screen and (min-width: ${desktopSize}) {
    margin: -80px 0 0 0;
  }
`;

const CardHeader = styled.h3`
  color: hsl(260, 8%, 14%);
  font-size: 2rem;
  margin: 2.2rem auto;
  padding: 1rem;
  text-align: center;

  @media only screen and (min-width: ${desktopSize}) {
    padding: 0;
    text-align: left;
  }
`;

const CardText = styled.p`
  color: hsl(0, 0%, 75%);
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.6;
  text-align: center;

  @media only screen and (min-width: ${desktopSize}) {
    text-align: left;
  }
`;

function FeatureCard({ icon, title, text, styleByPosition }) {

  const getIcon = (icon) => {
    switch(icon) {
      case 'iconBrand':
        return <IconBrand />;
      case 'iconDetailed':
        return <IconDetailed />;
      case 'iconFully':
        return <IconFully />;
      default: 
        return;
    }
  }

  return (
    <Card className={styleByPosition}>
      <CardIcon>{ getIcon(icon) }</CardIcon>
      <CardHeader>{title}</CardHeader>
      <CardText>{text}</CardText>
    </Card>
  );
}

export default FeatureCard;