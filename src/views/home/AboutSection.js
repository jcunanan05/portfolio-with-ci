import React from 'react';
import processMarkdown from '../../libs/marked';
import Content from '../components/Content';
import Section from '../components/Section';
import { about, skills } from '../../content/index';

export default function AboutSection() {
  return (
    <Section title="About" name="about">
      <Content __html={processMarkdown(about)} />
      <div className="columns is-multiline">
        <div className="column is-6">
          <Content __html={processMarkdown(skills.core)} />
        </div>
        <div className="column is-6">
          <Content __html={processMarkdown(skills.tools)} />
        </div>
      </div>
    </Section>
  );
}
