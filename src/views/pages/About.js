import React from 'react';
import Grid, { Cell } from '../components/Grid';
import Icon from '../components/Icon';

import './About.css';

export default function Banner() {
  return (
    <section className="About" id="about">
      <Grid>
        <Cell className="mdl-cell--12-col">
          <h2>About</h2>
        </Cell>
        <Cell className="mdl-cell--12-col">
          <Icon className="far fa-smile-beam" />
          <p>I am passionate about learning, especially web development. I also like to talk about what I learned because it also trains how I think.</p>
        </Cell>
      </Grid>
    </section>
  );
}
