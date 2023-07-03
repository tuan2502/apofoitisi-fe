module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ["react-native-reanimated/plugin", 
    [
      'module-resolver',
      {
        root: ['./app/'],
        alias: {
          '@assets': './app/assets',
          '@components': './app/components',
          '@constants': './app/constants',
          '@hook': './app/hook',
          '@navigators': './app/navigators',
          '@screens': './app/screens',
          '@styles': './app/styles',
          '@utils': './app/utils',
        },
      },
    ],
],
  };
};
