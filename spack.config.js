const path = require('path');
const { config } = require('@swc/core/spack')

module.exports = config({
  entry: {
    'main': __dirname + '/src/index.js',
  },
  output: {
    path: path.join(__dirname, "dist"),
  },
  module: {},
  options: {
    jsc: {
      parser: {
        syntax: "ecmascript",
        jsx: true,
        dynamicImport: false,
        privateMethod: false,
        functionBind: false,
        exportDefaultFrom: false,
        exportNamespaceFrom: false,
        decorators: false,
        decoratorsBeforeExport: false,
        topLevelAwait: false,
        importMeta: false
      },
      transform: null,
      target: "es2016",
      loose: false,
      externalHelpers: false,
      keepClassNames: false
    }
  }
});
