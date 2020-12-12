import styled from 'styled-components';

export const Wrapper = styled.main`
  margin-top: -5rem;
  background: var(--clr-primary-8);
  min-height: calc(100vh - 5rem);
  display: grid;
  place-items: center;
  padding: 0 1rem;
  div {
    text-align: center;
    color: var(--clr-white);
  }
  h1 {
    font-size: 5rem;
  }
  h3 {
    text-transform: none;
    margin-top: 1.5rem;
    margin-bottom: 1.75rem;
  }
`;
