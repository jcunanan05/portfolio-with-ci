import React from 'react';
import Grid, { Cell } from '../components/Grid';
import Icon from '../components/Icon'

import './Banner.css';

const Hero = ({ title, subtitle }) => (
  <Cell className="mdl-cell--12-col Banner__hero">
    <div className="titles">
      <h1 className="Banner__title">{title}</h1>
      <h2 className="Banner__subtitle">{subtitle}</h2>
    </div>
    <div className="social-media">
      <Icon className="fab fa-github-alt" href="https://github.com/jcunanan05" />
      <Icon className="fab fa-linkedin" href="https://www.linkedin.com/in/cunananjonathan/" />
      <Icon className="fab fa-free-code-camp" href="https://www.freecodecamp.org/jcunanan05" />
      <Icon className="fab fa-codepen" href="https://codepen.io/jcunanan05/" />
    </div>
  </Cell>
);

const ImageOverlay = () => (
  <span className="image__overlay">
    <img src="/images/sand" alt="" />
  </span>
);

const ColorOverlay = () => <span className="color__overlay" />;

export default function Banner() {
  return (
    <section className="Banner" id="banner">
      <Grid>
        <Hero title="Jonathan Cunanan" subtitle="Front-end Developer" />
      </Grid>
      <ImageOverlay />
      <ColorOverlay />
    </section>
  );
}
