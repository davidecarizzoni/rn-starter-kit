module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@src/components': './src/components',
          '@src/types': './src/types',
          '@src/constant': './src/constant',
          '@src/i18n': './src/i18n',
        },
      },
    ],
  ],
};
