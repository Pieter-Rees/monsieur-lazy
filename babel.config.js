const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "10",
        firefox: "50",
        chrome: "57",
        safari: "9",
      },
      useBuiltIns: "usage",
      corejs: { version: "3.8", proposals: true },
    },
  ],
];

module.exports = { presets };
