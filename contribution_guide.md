# Contributing
We are open to, and grateful for, any contributions made by the community. Everyone participating in this project governed by the [Code of Conduct](code_of_conduct.md).

## Setting up the Development Environment
To get the project running, execute an `npm install`. The command `npm link ` helps with a symlink that allows to run the tool from your working source code.

## Testing
Please update the tests to reflect your code changes. Also, new features must include adequate test coverage. High test coverage does not ensure features are bug free, but it decreases the likelyhood of defects by identifying untested code. So, contributions are expected to have high test coverage.

Execute the following command to run test coverage:
```
npm run test-cov
```

## Code Style
We optimize for readability. The project uses ESLint to maintain and enforce its code style. Ensure your contribution passes the linter before summiting a pull request.

Execute the following command to run the linter:
```
npm run lint
```

## Documentation
Update the documentation appropriately to represent the changes to the behavior of the project.

## Commit Messages
- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 50 characters or less
- Do not end the subject line with a period

## Pull Requsts
1) Fork the repo, clone your fork, and configure the remotes
2) If you cloned a while ago, get the latest changes from upstream
3) Create a new topic branch (off the master branch) to contain your feature, change, or fix
4) Commit your changes in logical chunks; follow the commit message guidelines above
5) Locally merge (or rebase) the upstream development branch into your topic branch
6) Push your topic branch up to your fork
7) Open a Pull Request with a clear title and description

## Releasing / Changelog

## License
By contributing, you agree that your contributions will be licensed under the LICENSE file in the root directory of this source tree.
