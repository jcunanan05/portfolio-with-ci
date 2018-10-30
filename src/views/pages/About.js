import React from 'react';
import Grid, { Cell } from '../components/Grid';

export default function About() {
  return (
    <section id="about">
      <Grid>
        <Cell className="mdl-cell--12-col">
          <h1 className="mdl-typography--display-1">Jonathan Cunanan</h1>
        </Cell>
      </Grid>
    </section>
  );
}
