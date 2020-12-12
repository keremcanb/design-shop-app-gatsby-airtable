import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/Layout/layout';
import { Wrapper } from '../projects/styles';

const Error = () => (
  <Layout>
    <Wrapper>
      <div>
        <h1>oops.</h1>

        <h3>The page you are looking for doesn't exist.</h3>

        <Link to="/" className="btn">
          home
        </Link>
      </div>
    </Wrapper>
  </Layout>
);

export default Error;
