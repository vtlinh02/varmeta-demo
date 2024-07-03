/** @type {import('tailwindcss').Config} */
import { createThemes } from '@var-meta/theme';
import { withTV } from 'tailwind-variants/transformer';
const config = {
  darkMode: 'class',
  content: [
    './.storybook/welcome.stories.mdx',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@var-meta/ui/**/*.{js,ts,jsx,tsx}'
  ],
  plugins: [createThemes()],
};
module.exports = withTV(config)