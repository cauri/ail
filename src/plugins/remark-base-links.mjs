import { visit } from 'unist-util-visit';

/**
 * Remark plugin that prepends the configured base path to internal links
 * in markdown content. Only affects absolute paths starting with `/`.
 * Does nothing when base is `/` (local dev).
 */
export function remarkBaseLinks({ base = '/' } = {}) {
  const prefix = base === '/' ? '' : base.replace(/\/$/, '');

  return (tree) => {
    if (!prefix) return;

    visit(tree, 'link', (node) => {
      if (
        typeof node.url === 'string' &&
        node.url.startsWith('/') &&
        !node.url.startsWith('//')
      ) {
        node.url = prefix + node.url;
      }
    });
  };
}
