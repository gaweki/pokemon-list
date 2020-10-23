const fetch = require('node-fetch');

module.exports = {
  setupFiles: ['./jest.setup.js'],
  transform: {
    "^.+\\.svelte$": "jest-transform-svelte",
    "^.+\\.js$": "babel-jest"
  },
  "roots": [
    "<rootDir>"
  ],
  "moduleNameMapper": {
    "@/(.*)$": "<rootDir>/src/$1"
  },
  moduleFileExtensions: ["js", "svelte"],
  testPathIgnorePatterns: ["node_modules"],
  bail: false,
  verbose: true,
  transformIgnorePatterns: ["node_modules/(?!svelte-routing)(?!alias)"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  "globals": {
    "fetch": fetch,
    "__apps__": {
      env: {
        basePokeAPI: "https://pokeapi.co/api/v2/"
      }
    }
  }
};