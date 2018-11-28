import React, { Component } from 'react';
import processMarkdown from './libs/marked';
import Navbar from './views/components/Navbar';
import NavbarItem from './views/components/Navbar/NavbarItem';
import Hero from './views/components/Hero';
import Section from './views/components/Section';
import Content from './views/components/Content';
import Footer from './views/components/Footer';
import { about } from './content/index';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar menu={<NavbarItem href="/#about" text="About" />} />
        <Hero title="Jonathan Cunanan" subtitle="Front-end Developer" />

        <Section title="About" name="about">
          <Content className="content" __html={processMarkdown(about)} />
        </Section>

        <Footer />
      </div>
    );
  }
}

export default App;
