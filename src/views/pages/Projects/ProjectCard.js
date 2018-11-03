import React, { Fragment } from 'react';
import { Cell } from '../../components/Grid';
import Icon from '../../components/Icon';
import Card, { CardButton } from '../../components/Card';

const Project = ({ title, bodyText, href, github }) => (
  <Cell className="mdl-cell--4-col Project__cell">
    <Card
      className="Project__card"
      title={title}
      bodyText={bodyText}
      footer={
        <Fragment>
          <CardButton text="Visit Site" href={href} />
          <Icon className="fab fa-github Project__icon" href={github} />
        </Fragment>
      }
    />
  </Cell>
);

export default Project;