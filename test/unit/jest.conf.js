const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  preset: 'ts-jest',
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/locale/translations/**/*.js'
  ]
}
