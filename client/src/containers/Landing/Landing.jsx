import React from 'react';
import styled from 'styled-components';

const StyledLanding = styled.main`
    height: 100%;
    border: 1px solid blue;
`;

function Landing() {
  return (
    <StyledLanding>
      Need some inspiration for your next coding project?
      Well, Let's get pickin'!
    </StyledLanding>
  );
}

export default Landing;
