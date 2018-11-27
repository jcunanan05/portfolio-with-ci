import React from 'react';

export default function Content({ __html }) {
  return (
    <div className="content" dangerouslySetInnerHTML={{ __html: __html }} />
  );
}
