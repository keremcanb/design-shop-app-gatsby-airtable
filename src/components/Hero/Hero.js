import React from 'react';
import { Link } from 'gatsby';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Background from '../Layout/Background/Background';
import { Wrapper } from './styles';

const Hero = () => (
  <Wrapper>
    <Background>
      <article>
        <h3>If you can dream it, we can create it</h3>
        <h1>Let your home be unique and stylish</h1>
        <Link to="/projects">Projects</Link>
      </article>
    </Background>
  </Wrapper>
);

export default Hero;
