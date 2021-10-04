import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        my Personal Portfolio
      </SectionTitle>
      <SectionText>
      Experienced Graphic Designer with a demonstrated history of working in the photography industry. Skilled in Photography, Videography, Art, Graphic Design, and Information Technology. Strong media and communication professional with an Honours Degree of Bachelor of Science in Information Technology.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}> Learn More </Button>
    </LeftSection>
  </Section>
);

export default Hero;