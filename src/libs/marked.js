import marked from 'marked';

const renderer = new marked.Renderer();
renderer.link = (href, _, text) =>
  `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

export const options = {
  gfm: true,
  breaks: true,
  renderer
};

const processMarkdown = text => {
  if (!text) return '';

  return marked(text, options);
};

export default processMarkdown;