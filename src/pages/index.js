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
// import Layout from '../components/Layout/layout';
// import Hero from '../components/Hero/Hero';
// import About from '../components/About/About';
// import Projects from '../components/Projects/Projects';
// import Survey from '../components/Survey/Survey';
// import Slider from '../components/Slider/Slider';
// import GridProjects from '../components/GridProjects/GridProjects';

const HomePage = () => (
  <Layout>
    <Hero />
  </Layout>
);

export default HomePage;
