const esModules = ['lodash-es'].join('|');

module.exports = {
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ['<rootDir>/src'],
  // Jest transformations -- this adds support for TypeScript using ts-jest
  transform: {
    '^.+\\.(js|ts|tsx)$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [`node_modules/(?!${esModules})`],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  setupFiles: ['jest-localstorage-mock'],

  // Runs special logic, such as cleaning up components when using React Testing Library and adds special extended assertions to Jest
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    './script/test/setupTests.js',
    './public/spa_config.js',
  ],

  moduleNameMapper: {
    '\\.(css|scss|webmanifest)$': 'identity-obj-proxy',
    '\\.(png|svg|pdf|jpg|jpeg|gif)$':
      '<rootDir>/src/components/__mocks__/fileMock.js',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/index.{ts,tsx}',
    '!**/types.{ts,tsx}',
  ],
  coverageDirectory: './coverage',
  coverageReporters: ['json', 'lcov', 'clover', 'text-summary'],
  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  // Module file extensions for importing
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleDirectories: ['node_modules', 'src'],
};
