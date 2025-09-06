export const post = {
  slug: "react-and-css",
  title: "React and CSS: Best Practices",
  abstract:
    "Explore the best ways to style React components, from CSS modules to styled-components and everything in between.",
  publishedOn: "2024-01-01",
}

export const content = `# ${post.title}

${post.abstract}

## Styling Approaches in React

There are several ways to style React components:

1. **CSS Modules**: Scoped CSS classes
2. **Styled Components**: CSS-in-JS solution
3. **Tailwind CSS**: Utility-first framework
4. **Emotion**: Another CSS-in-JS library

## Best Practices

- Keep styles close to components
- Use consistent naming conventions
- Leverage CSS custom properties for theming
- Consider performance implications

\`\`\`jsx
// Example with CSS Modules
import styles from './Button.module.css';

function Button({ children }) {
  return <button className={styles.button}>{children}</button>;
}
\`\`\`
`
