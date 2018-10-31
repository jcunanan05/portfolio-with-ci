import React from 'react';
import processMarkdown from '../../libs/marked';

export default function MarkdownContent({ content= '', className = ''}) {
  if (content === '') return '';

  return <div className={className} dangerouslySetInnerHTML={{__html: processMarkdown(content)}} />;
}