/* eslint-disable array-callback-return */
import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { GatsbyContext } from '../../../context/context';
import { Wrapper } from './styles';

const NavLink = ({ page }) => {
  const { links } = useContext(GatsbyContext);

  return (
    <Wrapper>
      <button>{page}</button>

      <div className="links">
        {links.map((link, index) => {
          const { url, label, icon } = link;

          if (link.page === page) {
            return (
              <Link to={url} key={index}>
                {icon}
                {label}
              </Link>
            );
          }
        })}

        <div className="caret" />
      </div>
    </Wrapper>
  );
};

export default NavLink;
