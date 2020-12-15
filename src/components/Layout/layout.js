import React, { useContext } from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Sidebar from './Sidebar/Sidebar';
import { GatsbyContext } from '../../context/context';

const Layout = ({ children }) => {
  // Get isSidebarOpen state from global context (default false)
  const { isSidebarOpen } = useContext(GatsbyContext);

  return (
    <>
      <Navbar />
      {isSidebarOpen && <Sidebar />}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
