import React, { Fragment } from 'react';
import Navbar from './Navbar';

const Layout = ({ children,title }) => {
  return (
    <Fragment>
      <Navbar title={title} />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
 