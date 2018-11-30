import React from 'react';

export default function Content({ __html }) {
  return (
    <div className="Content content" dangerouslySetInnerHTML={{ __html: __html }} />
  );
}
