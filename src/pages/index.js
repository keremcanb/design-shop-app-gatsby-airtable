import React from 'react';
import { graphql } from 'gatsby';
import {
  Layout,
  Hero,
  About,
  Survey,
  Slider,
  GridProjects
} from '../components';
import SEO from '../components/Seo/seo';

const HomePage = ({
  data: {
    allAirtable: { nodes: projects }
  }
}) => (
  <Layout>
    <Hero projects={projects} />
    <About />
    <GridProjects projects={projects} title="latest projects" />
    <Survey />
    <Slider />
  </Layout>
);

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Projects" } }
      sort: { fields: data___date, order: DESC }
      limit: 4
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

export default HomePage;
