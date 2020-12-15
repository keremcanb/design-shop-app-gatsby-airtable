import React, { useContext } from 'react';
import { MdClose } from 'react-icons/md';
import { Link } from 'gatsby';
import { Wrapper } from './styles';
import { GatsbyContext } from '../../../context/context';

const Sidebar = () => {
  // Get global links state & hideSidebar function from Context
  const { links, hideSidebar } = useContext(GatsbyContext);

  return (
    <Wrapper>
      <div className="container">
        <button onClick={hideSidebar}>
          <MdClose className="icon" />
        </button>

        {/* Iterate nested links */}
        <div className="links">
          {links.map(({ url, label, icon }, index) => (
            <Link to={url} key={index} onClick={hideSidebar}>
              {icon}
              {label}
            </Link>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
