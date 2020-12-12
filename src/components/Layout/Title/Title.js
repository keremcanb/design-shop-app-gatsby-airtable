import React from 'react';
import { Wrapper } from './styles';

const Title = ({ title }) => (
  <Wrapper>
    <h2>
      <span>/</span> {title}
    </h2>
  </Wrapper>
);

export default Title;
