import React, { Component } from 'react';
import Grid, { Cell } from '../../components/Grid';
import Container from '../../components/Container';
import createClient from '../../../libs/contentful';
import Project from './ProjectCard';
import './Projects.css';

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.loadProjects = this.loadProjects.bind(this);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    this.loadProjects();
  }

  async loadProjects() {
    // fetch and set the state
    const client = createClient();
    const projects = await client.getEntries({
      content_type: 'posts',
      include: 3
    });
    this.setState({ projects: projects.items });
  }

  renderProjects(projects) {
    //empty project
    if(!projects || projects.length === 0) return '';
    // json from contentful
    return projects.map(({ fields, sys }) => (
      <Project
        key={sys.id}
        title={fields.title}
        bodyText={fields.content}
        href={fields.url}
        github={fields.codeUrl}
      />
    ));
  }

  render() {
    return (
      <section className="Projects" id="projects">
        <Container>
          <Grid>
            <Cell className="mdl-cell--12-col">
              <h2>Projects</h2>
            </Cell>

            <Cell className="mdl-cell--12-col Project__card-list">
              <Grid>
                {this.renderProjects(this.state.projects)}
              </Grid>
            </Cell>
          </Grid>
        </Container>
      </section>
    );
  }
}
