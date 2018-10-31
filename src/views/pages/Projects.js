import React from 'react';
import Grid, { Cell } from '../components/Grid';
// import Icon from '../components/Icon';

export default function Projects() {
  return (
    <section className="Projects" id="projects">
      <Grid>
        <Cell className="mdl-cell--12-col">
          <h2>Projects</h2>
        </Cell>
        <Cell className="mdl-cell--4-col">
          Project 1
        </Cell>
        <Cell className="mdl-cell--4-col">
          Project 2
        </Cell>
      </Grid>
    </section>
  );
}