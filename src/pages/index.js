import React from 'react';
import { graphql } from 'gatsby';
import {
  Layout,
  Hero,
  About,
  Projects,
  Survey,
  Slider,
  GridProjects
} from '../components';
import SEO from '../components/Seo/seo';

const HomePage = () => (
  <Layout>
    <Hero />
    <About />
  </Layout>
);

export default HomePage;
