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
  coverageReporters: ['lcovonly'],
  coverageDirectory: 'test-reports',
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/src/components/__mocks__/styleMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/components/__mocks__/fileMock.js'
  }
};
