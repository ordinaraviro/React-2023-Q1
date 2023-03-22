module.exports = {
    // other options...
    collectCoverageFrom: [
      'src/components/**/*.{js,jsx,ts,tsx}', // include all component files
      '!src/components/**/*.test.{js,jsx,ts,tsx}', // exclude test files
    ],
  };
