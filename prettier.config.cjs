/** @type {import('prettier').Config} */
module.exports = {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  singleQuote: true,
  printWidth: 120,
  tailwindAttributes: ['class'],
  tailwindFunctions: ['clsx'],
  overrides: [
    {
      files: '**/*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
