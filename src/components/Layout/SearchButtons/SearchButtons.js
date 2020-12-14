import React, { useState } from 'react';
import { Wrapper } from './styles';

const SearchButtons = ({ projects, setProjects, setBackToAll }) => {
  const [index, setIndex] = useState(0);

  const types = [
    'all',
    ...new Set(projects.map((project) => project.data.type))
  ];

  const showProjects = (type, typeIndex) => {
    setIndex(typeIndex);

    if (type === 'all') {
      setBackToAll();
    } else {
      const tempProjects = projects.filter(
        (project) => project.data.type === type
      );
      setProjects(tempProjects);
    }
  };

  return (
    <Wrapper>
      {types.map((type, typeIndex) => (
        <button
          key={typeIndex}
          className={index === typeIndex ? 'active' : undefined}
          onClick={() => showProjects(type, typeIndex)}
        >
          {type}
        </button>
      ))}
    </Wrapper>
  );
};

export default SearchButtons;
