module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    ".+\\.(css|styl|less|sass|scss)$": "jest-transform-css"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: ["<rootDir>/setupEnzyme.ts"],
  setupFiles: [
    "<rootDir>/setupEnzyme.ts"
  ],
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      diagnostics: false,
      babelConfig: true,
      tsConfig: "tsconfig.jest.json"
    }
  }
}
