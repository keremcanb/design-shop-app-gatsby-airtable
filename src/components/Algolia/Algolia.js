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

const Search = () => <h2>algolia search</h2>;

export default Search;
