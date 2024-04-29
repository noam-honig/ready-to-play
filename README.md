# Ready to play

This codebase is intended to server as a starting point for simple demos which will be used to review issues.

[Open in stackblitz](https://stackblitz.com/github/noam-honig/ready-to-play)
[Open on Codesandbox](https://githubbox.com/noam-honig/ready-to-play)

## Seed data

```ts
await tasks.insert(
  Array.from({ length: 10 }).map((_, i) => ({
    title: faker.hacker.phrase(),
    completed: i % 2 === 0,
  }))
)
```
