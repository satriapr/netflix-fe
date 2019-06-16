# Netflix Clone

This is a simple Netflix clone using React.js and Typescript, generated using create-react-app

```bash
yarn create react-app my-app --typescript
```

## FE Requirement

API: [omdbAPI](http://www.omdbapi.com/)

1. Users can see different category in movie list page -> Done
2. Users can swipe horizontal in each category -> Done. Notes: If you use wide screen please try to resize the browser because OMDB max response for movie is 10.
3. Users can see movie detail page -> Done
4. Users can search movie title -> I'm adding this as extra feature


## Installation

Use the package manager [yarn](https://yarnpkg.com/en/) to install dependencies.

```bash
yarn install
```

## Technical overview

### I. Main dependency libraries
- [React](https://reactjs.org/): Javascript UI library
- [Typescript](https://www.typescriptlang.org/docs/home.html): typed javascript, convenient for coding (autocomplete typing, type checking) and refactoring
- [Axios](https://github.com/axios/axios): promise based HTTP client
- [Ramda](https://ramdajs.com/docs): functional library for general use
- [Jest](https://jestjs.io/docs/en/getting-started) and [Enzyme](https://airbnb.io/enzyme/docs/api/): js testing framework
- Other supporting libraries, can be found in package.json

### II. Source code architecture
- components folder: Re-usable component, contain stateless component and hooks
- constants folder: Constant
- models folder: Interface for parameter and payload
- modules folder: Web pages
- services: Interraction with API
- typings: Add libraries missing type
- utils: Helper
- .view file: UI of the screen
- .module.css file: CSS module for view
- .handler file: Hooks, event handler, logic
- .test file: Testing

### III. Run and Test

To run project:
```bash
yarn start
```

To run test:
```bash
yarn test
```

## License
[MIT](https://choosealicense.com/licenses/mit/)