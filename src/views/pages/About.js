import React from 'react';
import Grid, { Cell } from '../components/Grid';
import Container from '../components/Container';
import Content from '../components/Content';
import processMarkdown from '../../libs/marked';

import './About.css';

const markdownText = `
I'm Jonathan Cunanan, I offer front-end solutions and consulting. I spend my time exploring and developing solutions for websites and web apps. I use a wide variety of frameworks, tools, workflows, to develop production quality apps with ease.
`;

export default function About() {
  return (
    <section className="About" id="about">
      <Container>
        <Grid>
          <Cell className="mdl-cell--12-col">
            <h2>About Me</h2>
          </Cell>
          <Cell className="mdl-cell--12-col">
            <Content dangerouslySetInnerHTML={{__html: processMarkdown(markdownText)}}></Content>
          </Cell>
        </Grid>
      </Container>
    </section>
  );
}
