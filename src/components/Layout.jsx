import React, { Fragment } from 'react';
import Navbar from './Navbar';
import Register from "./Register";


const Layout = ({ children,title }) => {
  return (
    <Fragment>
      <Navbar title={title} />
      <main className='bg-black'>{children}</main>
      <Register/>
    </Fragment>
  );
};

export default Layout;
 