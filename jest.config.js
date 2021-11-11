module.exports = {
  moduleFileExtensions: ['vue', 'ts', 'js'],
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.ts$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
