import React from 'react';
import styled from 'styled-components';


const Spacer = styled.div`
  background-color: hsl(180, 66%, 49%);
  height: 100px;
  margin: 0 auto;
  width: 8px;
`;

function FeatureSpacer() {
  
  return (
    <Spacer />
  );
}

export default FeatureSpacer;