module.export = {
  presets: [
    [
      "@babel/present-env",
      {
        targets: {
          node: "current"
        },
      },
    ],
    "@babel/present-react",
    "@babel/present-typescript"
  ],
}