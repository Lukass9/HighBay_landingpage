module.exports = {
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss', // MUST come last
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],

  pluginSearchDirs: false,
  singleQuote: true,
  printWidth: 85,
};
