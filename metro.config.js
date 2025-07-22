// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

// eslint-disable-next-line no-undef
const config = getDefaultConfig(__dirname)

config.server = {
  ...config.server,
  enhanceMiddleware: (middleware) => {
    return (req, res, next) => {
      // Set custom timeout (in milliseconds)
      req.setTimeout(30000); // 30 seconds
      res.setTimeout(30000); // 30 seconds

      return middleware(req, res, next);
    };
  }
};

config.watcher = {
  ...config.watcher,
  unstable_lazySha1: true, // Enable lazy SHA1 computation for better performance
};

module.exports = withNativeWind(config, { input: './global.css' })
