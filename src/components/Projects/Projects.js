import React, { useState } from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import Title from '../Layout/Title/Title';
import SearchButtons from '../Layout/SearchButtons/SearchButtons';
import { Wrapper } from './styles';

const Projects = ({ projects: data, title, page }) => {
  const [projects, setProjects] = useState(data);

  const setBackToAll = () => {
    setProjects(data);
  };

  return (
    <Wrapper className="section">
      <Title title={title || 'projects'} />

      {page && (
        <SearchButtons
          projects={data}
          setProjects={setProjects}
          setBackToAll={setBackToAll}
        />
      )}

      <div className="section-center">
        {projects.map((item) => {
          const { id } = item;
          const { name, type } = item.data;
          const { fluid } = item.data.image.localFiles[0].childImageSharp;

          return (
            <article key={id}>
              <div className="container">
                <Image fluid={fluid} className="img" />

                <div className="info">
                  <p>- {type} -</p>
                  <h3>{name}</h3>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {!page && (
        <Link to="/projects" className="btn">
          all projects
        </Link>
      )}
    </Wrapper>
  );
};

export default Projects;
