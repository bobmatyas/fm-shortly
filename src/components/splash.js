import React from 'react';
import styled from 'styled-components';
import { ReactComponent as WorkingImage } from '../images/illustration-working.svg';
import ButtonRounded from '../components/button-rounded';

function Splash() {
  return (
    <section>
      <h2>More than just shorter links</h2>
    
      <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>

      <ButtonRounded text="Get Started">Get Started</ButtonRounded>

      <WorkingImage />
      
    </section>
  );
}

export default Splash;