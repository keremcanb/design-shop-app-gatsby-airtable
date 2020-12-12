import React from 'react';
import Title from '../Layout/Title/Title';
import services from '../../constants/services';
import { Wrapper } from './styles';

const About = () => (
  <Wrapper className="section">
    <Title title="about us" />

    <div className="section-center">
      {services.map(({ id, icon, label, text }) => (
        <article key={id}>
          <span>{icon}</span>
          <h4>{label}</h4>
          <p>{text}</p>
        </article>
      ))}
    </div>
  </Wrapper>
);

export default About;
