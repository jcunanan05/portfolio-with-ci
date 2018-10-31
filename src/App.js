import React, { Component, Fragment } from 'react';
import Navbar from './views/components/Navbar';
import Layout from './views/components/Layout';
import NavbarLink from './views/components/Navbar/Link';
import About from './views/pages/About';

import './App.css';

const NavbarLinks = () => (
  <Fragment>
    <NavbarLink title="About" href="#about"/>
    <NavbarLink title="Projects" href="#projects" />
    <NavbarLink title="Skills" href="#skills"/>
  </Fragment>
);

class App extends Component {
  render() {
    return (
      <Layout>
        <Navbar title="Jonathan C." links={<NavbarLinks />} />

        <main className="mdl-layout__content">
          <About />
        </main>
      </Layout>
    );
  }
}

export default App;
