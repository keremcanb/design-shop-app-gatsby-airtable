/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Background from '../Layout/Background/Background';
import { Wrapper } from './styles';

const Hero = ({ projects }) => {
  const images = projects.map(
    ({
      data: {
        image: { localFiles }
      }
    }) => {
      const image = localFiles[0].childImageSharp.fluid;

      return image;
    }
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = images.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, images]);

  return (
    <Wrapper>
      <Background image={images[index]}>
        <article>
          <h3>If you can dream it, we can create it</h3>
          <h1>Let your home be unique and stylish</h1>
          <Link to="/projects">Projects</Link>
        </article>

        <button className="prev-btn" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next-btn" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>

        <div className="dots">
          {images.map((_, btnIndex) => (
            <span
              key={btnIndex}
              onClick={() => setIndex(btnIndex)}
              className={index === btnIndex ? 'active' : undefined}
            />
          ))}
        </div>
      </Background>
    </Wrapper>
  );
};

export default Hero;
