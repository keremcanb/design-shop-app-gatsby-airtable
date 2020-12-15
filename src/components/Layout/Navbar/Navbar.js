import React, { useContext } from 'react';
import { GoThreeBars } from 'react-icons/go';
import { Link } from 'gatsby';
import logo from '../../../images/logo.svg';
import NavLink from '../NavLink/NavLink';
import { GatsbyContext } from '../../../context/context';
import { Wrapper } from './styles';

const Navbar = () => {
  const { isSidebarOpen, showSidebar, links } = useContext(GatsbyContext);

  // Get unique values
  const tempLinks = [...new Set(links.map((link) => link.page))];

  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="design" />
          </Link>

          {!isSidebarOpen && (
            <button className="toggle-btn" onClick={showSidebar}>
              <GoThreeBars />
            </button>
          )}
        </div>

        <ul className="nav-links">
          {tempLinks.map((page, index) => (
            <NavLink key={index} page={page} />
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Navbar;
