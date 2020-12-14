import React from 'react';
import { graphql } from 'gatsby';
import { Layout, Projects, Algolia } from '../../components';
import { Wrapper } from './styles';

const ProjectsPage = ({
  data: {
    allAirtable: { nodes: projects }
  }
}) => (
  <Wrapper>
    <Layout>
      <Projects title="our projects" projects={projects} page />
      <Algolia />
    </Layout>
  </Wrapper>
);

export const query = graphql`
  {
    allAirtable(filter: { table: { eq: "Projects" } }) {
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

export default ProjectsPage;
