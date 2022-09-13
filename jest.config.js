module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  transformIgnorePatterns: [
    "node_modules/(?!(@react-leaflet|react-leaflet)/)"
  ],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  }
};
