import React, { Fragment } from 'react';
import Header from './Header';
import Drawer from './Drawer';

export default function Navbar({ title = 'Title' }) {
  return (
    <Fragment>
      <Header title={title} />
      <Drawer title={title} />
    </Fragment>
  );
}
