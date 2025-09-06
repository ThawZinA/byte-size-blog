export const post = {
  slug: "javascript-closures",
  title: "Understanding JavaScript Closures",
  abstract: "Dive deep into JavaScript closures, one of the most powerful and misunderstood features of the language.",
  publishedOn: "2024-01-10",
}

export const content = `# ${post.title}

${post.abstract}

## What are Closures?

A closure is a function that has access to variables in its outer (enclosing) scope even after the outer function has returned.

\`\`\`javascript
function outerFunction(x) {
  return function innerFunction(y) {
    return x + y;
  };
}

const addFive = outerFunction(5);
console.log(addFive(3)); // 8
\`\`\`

## Practical Example

Closures are commonly used for data privacy and creating function factories.
`
