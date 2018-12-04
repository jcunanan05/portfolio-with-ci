import React, { Component } from 'react';
import processMarkdown from './libs/marked';
import Navbar from './views/components/Navbar';
import NavbarItem from './views/components/Navbar/NavbarItem';
import Section from './views/components/Section';
import Content from './views/components/Content';
import Footer from './views/components/Footer';
import HomeHeader from './views/home/HomeHeader';
import ProjectsSection from './views/home/ProjectsSection';
import { about } from './content/index';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar menu={<NavbarItem href="/#about" text="About" />} />
        <HomeHeader />

        <Section title="About" name="about">
          <Content className="content" __html={processMarkdown(about)} />
        </Section>

        <ProjectsSection />

        <Footer />
      </div>
    );
  }
}

export default App;
