module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        "babel-preset-expo",
        {
          jsxImportSource: "nativewind",
          unstable_transformImportMeta: true, // to make zustand work on web
        },
      ],
      "nativewind/babel",
    ],
  };
};
