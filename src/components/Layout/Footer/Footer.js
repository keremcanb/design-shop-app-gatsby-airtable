import React from 'react';
import { Wrapper } from './styles';

const Footer = () => (
  <Wrapper>
    <p>
      &copy; {new Date().getFullYear()} Keremcan Buyuktaskin. All rights
      reserved. Built with Gatsby
    </p>
  </Wrapper>
);

export default Footer;
