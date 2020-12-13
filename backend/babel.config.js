module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    ['module-resolver', {
      alias: {
        '@shared': './src/shared',
        '@modules': './src/modules',
        '@database': './src/database'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}