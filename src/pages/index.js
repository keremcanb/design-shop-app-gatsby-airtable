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

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Projects" } }
      limit: 3
      sort: { fields: data___date, order: DESC }
    ) {
      nodes {
        id
        data {
          date
          name
          type
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

const HomePage = ({
  data: {
    allAirtable: { nodes: projects }
  }
}) => (
  <Layout>
    <Hero />
    <About />
    <Projects projects={projects} title="latest projects" />
  </Layout>
);

export default HomePage;
