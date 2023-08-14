module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // You can use Babel for ES6 module support
  },
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy', // If you're using CSS modules, set up a mock for them
  },
  esModules: true, // Enable ES6 module support
};
