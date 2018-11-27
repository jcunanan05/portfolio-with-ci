import React, { Component } from 'react';
import Navbar from './views/components/Navbar';
import NavbarItem from './views/components/Navbar/NavbarItem';
import Hero from './views/components/Hero';
import Section from './views/components/Section';
import Content from './views/components/Content';
import processMarkdown from './libs/marked';
import { about } from './content/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar menu={<NavbarItem href="/#home" text="Home" />} />
        <Hero title="Jonathan Cunanan" subtitle="Front-end Developer" />

        <Section title="About">
          <Content
            className="content"
            __html={processMarkdown(about)}
          />
        </Section>
      </div>
    );
  }
}

export default App;
