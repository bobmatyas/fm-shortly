import React from 'react';
import styled from 'styled-components';

const desktopSize = `1034px`;

const Spacer = styled.div`
  background-color: hsl(180, 66%, 49%);
  height: 100px;
  margin: 0 auto;
  width: 8px;

  @media only screen and (min-width: ${desktopSize}) {
    height: 8px;
    margin: 0;
    padding: 0;
    width: 30px;
  }
`;

function FeatureSpacer() {
  
  return (
    <Spacer />
  );
}

export default FeatureSpacer;