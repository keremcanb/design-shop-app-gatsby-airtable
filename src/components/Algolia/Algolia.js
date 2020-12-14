import React from 'react';
import Image from 'gatsby-image';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Hits,
  connectHits
} from 'react-instantsearch-dom';
import Title from '../Layout/Title/Title';
import { Wrapper, Container } from './styles';

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
);

// Search results logic
const NewHits = connectHits(({ hits }) =>
  hits.map(({ objectID, image, name }) => (
    <article key={objectID}>
      <Image fluid={image} className="img" />
      <h4>{name}</h4>
    </article>
  ))
);

const Search = () => (
  <Wrapper>
    <Title title="Search" />

    <InstantSearch
      indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
      searchClient={searchClient}
    >
      <SearchBox />

      <Container className="section-center">
        <NewHits />
      </Container>
    </InstantSearch>
  </Wrapper>
);

export default Search;
