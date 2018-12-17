import React, { Component } from 'react';
import Section from '../components/Section';
import Content from '../components/Content';
import ProjectCard from './ProjectCard';
import { projects } from '../../content/index';
import * as contentful from 'contentful';
import defaultConfig from '../../libs/contentful';

export default class ProjectsSection extends Component {
  state = {
    projects: []
  };

  componentDidMount() {
    this.fetchProjectCards();
  }

  fetchProjectCards = async () => {
    const client = contentful.createClient(defaultConfig);
    const entries = await client.getEntries({
      content_type: 'posts'
    });

    this.setState({ projects: entries.items });
  };

  renderProjectCards = () => {
    if (!this.state.projects) return null;
    return this.state.projects.map(project => (
      <ProjectCard
        key={project.sys.id}
        title={project.fields.title}
        description={project.fields.content}
        linkToSite={project.fields.url}
        linkToCode={project.fields.codeUrl}
        tags={project.fields.tags}
      />
    ));
  };

  render() {
    return (
      <Section title="Projects" name="projects">
        <Content __html={projects.intro} />
        <div className="columns is-multiline">{this.renderProjectCards()}</div>
      </Section>
    );
  }
}
