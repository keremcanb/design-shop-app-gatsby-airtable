import React, { useContext } from 'react';
import { GoThreeBars } from 'react-icons/go';
import { Link } from 'gatsby';
import logo from '../../../images/logo.svg';
import NavLink from '../NavLink/NavLink';
import { Wrapper } from './styles';

const Navbar = () => (
  <Wrapper>
    <div className="nav-center">
      <div className="nav-header">
        <Link to="/">
          <img src={logo} alt="design" />
        </Link>

        <button className="toggle-btn">
          <GoThreeBars />
        </button>
      </div>

      <ul className="nav-links">
        <li>
          <button>products</button>
        </li>
        <li>
          <button>developers</button>
        </li>
        <li>
          <button>company</button>
        </li>
      </ul>
    </div>
  </Wrapper>
);

export default Navbar;
