import React from 'react';
import Section from '../components/Section';
import Content from '../components/Content';
import ProjectCard from './ProjectCard';
import { projects } from '../../content/index';

const CardExample = () => (
  <ProjectCard
    title="Random Quote Machine"
    description="Very great example of Random Quote Machine"
    linkToSite="https://github.com/jcunanan05"
    linkToCode="https://github.com/jcunanan05"
  />
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
