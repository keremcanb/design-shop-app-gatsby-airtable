import React, { useContext } from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Sidebar from './Sidebar/Sidebar';

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default Layout;
