import React from 'react';
import Section from '../components/Section';
import Content from '../components/Content';
import Card from '../components/Card';
import { IconLink } from '../components/Icon';
import { projects } from '../../content/index';

const CardExample = () => (
  <div className="column is-4">
    <Card>
      <Card.Content>
        <p className="title is-4">Random Quote Machine</p>
        <p className="subtitle is-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nisi
        </p>
      </Card.Content>
      <Card.Footer>
        <div className="card-footer-item">
          <a className="button is-outlined is-link" href="https://google.com">Visit Site</a>
          <IconLink icon="fab fa-github" href="https://codepen.io/jcunanan05/" />
        </div>
      </Card.Footer>
    </Card>
  </div>
);

export default function ProjectsSection() {
  return (
    <Section title="Projects" name="projects">
      <Content __html={projects.intro} />
      <div className="columns is-multiline">
        <CardExample />
        <CardExample />
        <CardExample />
        <CardExample />
        <CardExample />
      </div>
    </Section>
  );
}
