module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.json',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        root: ['.'],
        alias: {
          '~app/screens': './src/screens',
          '~app/components': './src/components',
          '~app/collections': './src/collections',
          '~app/store': './src/store',
          '~app/services': './src/services',
        },
      },
    ],
  ],
};
