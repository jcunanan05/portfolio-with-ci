import React, { Component, Fragment } from 'react';
import Navbar from './views/components/Navbar';
import NavbarItem from './views/components/Navbar/NavbarItem';
import Footer from './views/components/Footer';
import HomeHeader from './views/home/HomeHeader';
import ProjectsSection from './views/home/ProjectsSection';
import AboutSection from './views/home/AboutSection';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar
          brand="Home"
          menu={
            <Fragment>
              <NavbarItem href="/#about" text="About" />
              <NavbarItem href="/#projects" text="Projects" />
            </Fragment>
          }
        />
        <HomeHeader />

        <AboutSection />

        <ProjectsSection />

        <Footer />
      </div>
    );
  }
}

export default App;
