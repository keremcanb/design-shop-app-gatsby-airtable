import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Title from '../Layout/Title/Title';
import { Wrapper } from './styles';

const query = graphql`
  {
    allAirtable(filter: { table: { eq: "Customers" } }) {
      nodes {
        data {
          name
          quote
          title
          image {
            localFiles {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Slider = () => {
  const {
    allAirtable: { nodes: customers }
  } = useStaticQuery(query);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = customers.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, customers]);

  return (
    <Wrapper className="section">
      <Title title="reviews" />

      <div className="section-center">
        {customers.map((customer, customerIndex) => {
          const {
            data: { image, name, title, quote }
          } = customer;
          const customerImg = image.localFiles[0].childImageSharp.fixed;

          let position = 'nextSlide';
          if (customerIndex === index) {
            position = 'activeSlide';
          }
          if (
            customerIndex === index - 1 ||
            (index === 0 && customerIndex === customers.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article className={position} key={customerIndex}>
              <Image fixed={customerImg} className="img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}

        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </Wrapper>
  );
};

export default Slider;
