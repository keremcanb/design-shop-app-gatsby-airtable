import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { useStaticQuery, graphql } from 'gatsby';
import { Wrapper, fadeIn } from './styles';

const query = graphql`
  {
    file(relativePath: { eq: "mainBcg.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Background = ({ children, image }) => {
  const {
    file: {
      childImageSharp: { fluid }
    }
  } = useStaticQuery(query);

  return (
    <Wrapper>
      <BackgroundImage
        Tag="div"
        fluid={image || fluid}
        className="bcg"
        preserveStackingContext
      >
        {children}
      </BackgroundImage>
    </Wrapper>
  );
};

export default Background;
