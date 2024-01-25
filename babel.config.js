module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          root: ['./src/'],
          pages: './src/pages',
          components: './src/components',
          themes: './src/themes',
          utils: './src/utils',
          routes: './src/routes',
          types: './src/types',
          assets: './src/assets',
          layouts: './src/layouts',
          stories: './src/stories',
          locales: './src/locales',
          hooks: './src/hooks',
          stores: './src/stores',
        },
      },
    ],
  ],
};
