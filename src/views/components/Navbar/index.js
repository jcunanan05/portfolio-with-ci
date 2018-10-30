import React, { Fragment } from 'react';
import Header from './Header';
import Drawer from './Drawer';

export default function Navbar({ title = 'Title', links='' }) {
  return (
    <Fragment>
      <Header title={title} links={links} />
      <Drawer title={title} links={links} />
    </Fragment>
  );
}
