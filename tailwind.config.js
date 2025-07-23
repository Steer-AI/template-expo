const { hairlineWidth } = require('nativewind/theme');
const { colors } = require('./theme/colors');

const withOpacity = name => `rgb(var(--${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        border:      withOpacity('border'),
        input:       withOpacity('input'),
        ring:        withOpacity('ring'),
        background:  withOpacity('background'),
        foreground:  withOpacity('foreground'),
        primary:   { DEFAULT: withOpacity('primary'),   foreground: withOpacity('primary-foreground') },
        secondary: { DEFAULT: withOpacity('secondary'), foreground: withOpacity('secondary-foreground') },
        destructive:{DEFAULT: withOpacity('destructive'),foreground: withOpacity('destructive-foreground')},
        muted:     { DEFAULT: withOpacity('muted'),     foreground: withOpacity('muted-foreground') },
        accent:    { DEFAULT: withOpacity('accent'),    foreground: withOpacity('accent-foreground') },
        popover:   { DEFAULT: withOpacity('popover'),   foreground: withOpacity('popover-foreground') },
        card:      { DEFAULT: withOpacity('card'),      foreground: withOpacity('card-foreground') },
      },
      borderWidth: { hairline: hairlineWidth() },
    },
  },

  plugins: [
    ({ addBase }) => {
      addBase({
        ':root': colors.light,
        '.dark': colors.dark,
      });
    },
  ],
};
