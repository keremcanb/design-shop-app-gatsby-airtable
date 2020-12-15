import { TruckMonster } from '@styled-icons/fa-solid';
import React, { useState } from 'react';
import sublinks from '../constants/links';

const GatsbyContext = React.createContext();

const GatsbyProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [links, setLinks] = useState(sublinks);

  const showSidebar = () => {
    setIsSidebarOpen(true);
  };

  const hideSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Share isSidebarOpen & links states and functions with the whole app
  return (
    <GatsbyContext.Provider
      value={{ isSidebarOpen, links, showSidebar, hideSidebar }}
    >
      {children}
    </GatsbyContext.Provider>
  );
};

export { GatsbyContext, GatsbyProvider };
