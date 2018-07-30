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
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,ts,vue}', '!**/node_modules/**', '!**/*.d.ts'],
  testResultsProcessor: 'jest-sonar-reporter',
  coverageReporters: ['lcovonly'],
  coverageDirectory: 'test-reports'
};
