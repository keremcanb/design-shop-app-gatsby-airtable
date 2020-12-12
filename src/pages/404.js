import React from 'react';
import { Link } from 'gatsby';
import { Layout } from '../components';
import { ErrorWrapper } from './styles';

const Error = () => (
  <Layout>
    <ErrorWrapper>
      <div>
        <h1>oops.</h1>

        <h3>The page you are looking for doesn't exist.</h3>

        <Link to="/" className="btn">
          home
        </Link>
      </div>
    </ErrorWrapper>
  </Layout>
);

export default Error;
