// metro.config.js
const os = require('node:os');
const path = require('node:path');
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

// eslint-disable-next-line no-undef
const config = getDefaultConfig(__dirname);

config.cacheStores = ({ FileStore }) => [
  new FileStore({
    root: path.join(os.homedir(), "metro-cache"),
  }),
];

module.exports = withNativeWind(config, { input: "./global.css" });
