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
      },
    ],
  ];
  
  module.exports = { presets };
