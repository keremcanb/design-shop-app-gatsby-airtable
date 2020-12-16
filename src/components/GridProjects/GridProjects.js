import React from 'react';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import Title from '../Layout/Title/Title';
import { Wrapper } from './styles';

const GridProjects = ({ projects, title }) => (
  <Wrapper>
    <Title title={title || 'projects'} />

    <div className="tile-layout">
      {projects.map((project, index) => {
        const { id } = project;
        const { name, type } = project.data;
        const { fluid } = project.data.image.localFiles[0].childImageSharp;

        return (
          <article key={id} className={`div-${index}`}>
            <Image className="img" fluid={fluid} />

            <div className="info">
              <p>- {type} -</p>
              <h3>{name}</h3>
            </div>
          </article>
        );
      })}
    </div>

    <Link to="/projects" className="btn">
      all projects
    </Link>
  </Wrapper>
);

export default GridProjects;
