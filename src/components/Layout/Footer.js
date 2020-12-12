import React from 'react';
import { FooterWrapper } from './styles';

const Footer = () => (
  <FooterWrapper>
    <p>
      &copy; {new Date().getFullYear()} John Smilga. All rights reserved. Built
      with Gatsby
    </p>
  </FooterWrapper>
);

export default Footer;
