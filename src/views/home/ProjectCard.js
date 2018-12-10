import React from 'react';
import Card from '../components/Card';
import { IconLink } from '../components/Icon';
import './ProjectCard.css';

export default function ProjectCard({
  title,
  description,
  linkToSite,
  linkToCode
}) {
  const ProjectCodeButton = () => {
    if (!linkToCode) return null;
    return (
      <IconLink
        href={linkToCode}
        className="ProjectCodeButton button is-outlined is-link"
        icon="fab fa-github ProjectCodeButton__icon"
      >
        Code
      </IconLink>
    );
  };
  return (
    <div className="column is-4">
      <Card className="ProjectCard">
        <Card.Content>
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{description}</p>
        </Card.Content>
        <Card.Footer>
          <div className="card-footer-item is-block">
            <a
              className="button is-outlined is-link"
              href={linkToSite}
              target="_blank noopener noreferrer"
            >
              Visit Site
            </a>
            &nbsp;
            <ProjectCodeButton />
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
}
