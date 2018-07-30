module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'vue'],
  verbose: true,
  testURL: 'http://localhost/',
  testResultsProcessor: 'jest-sonar-reporter',
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,ts,vue}', '!**/node_modules/**', '!**/*.d.ts'],
  coverageReporters: ['lcovonly'],
  coverageDirectory: 'test-reports'
};
