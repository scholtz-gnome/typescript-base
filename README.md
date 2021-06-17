# Typescript Base
A base typescript project with a testing environment set up.

## Set up
Run `npm install` in your CLI at the root of the directory. This will install `typescript` as a dependency, `jest`, `rimraf`, `ts-node` and `ts-jest` as dev-dependencies and `@types/node` and `@types/jest` as type declarations.

## NPM Scripts
- `npm run build` runs two commands sequentially. The first runs `rimraf` which executes the Unix commands `rm -rf` on the `./dist` directory where the compiled JS sits. The second command then compiles your TypeScript code into JS and puts it into a new `dist` directory at the root of the project.
- `npm test` first runs the `pretest` script which runs `npm run build`. Then it runs the `jest` testing environment in `--watchAll` mode. Based on `jest.config.ts` at the root of the directory, the testing environment is set to `node`, the preset is set to `ts-jest`, allowing you to test TypeScript code and code coverage is collected and stored within the `tests` directory. 
