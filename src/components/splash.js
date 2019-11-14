import React from 'react';
import styled from 'styled-components';
import { ReactComponent as WorkingImage } from '../images/illustration-working.svg';

function Splash() {
  return (
    <>
      <h2>More than just shorter links</h2>
    
      <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>

      <button>Get Started</button>

      <WorkingImage />
      
    </>
  );
}

export default Splash;