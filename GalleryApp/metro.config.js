const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  server: {
    enhanceMiddleware: (middleware) => {
      middleware.setFsCachingEnabled(false); // Disable caching for Fast Refresh
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

