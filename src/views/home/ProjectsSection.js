import React from 'react';
import Section from '../components/Section';
import Content from '../components/Content';
import Card from '../components/Card';
import { projects } from '../../content/index';

export default function ProjectsSection() {
  return (
    <Section title="Projects" name="projects">
      <Content __html={projects.intro} />
      <Card>
        <Card.Content>
          <p className="title">
            “There are two hard things in computer science: cache invalidation,
            naming things, and off-by-one errors.”
          </p>
          <p className="subtitle">Jeff Atwood</p>
        </Card.Content>
        <Card.Footer>
          <div className="card-footer-item">
            visit Site
          </div>
        </Card.Footer>
      </Card>
    </Section>
  );
}
