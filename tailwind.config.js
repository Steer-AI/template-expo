/** @type {import('tailwindcss').Config} */

const { hairlineWidth, platformSelect } = require('nativewind/theme');

module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: colorVariable('border'),
        input: colorVariable('input'),
        ring: colorVariable('ring'),
        background: colorVariable('background'),
        foreground: colorVariable('foreground'),
        primary: {
          DEFAULT: colorVariable('primary'),
          foreground: colorVariable('primary-foreground'),
        },
        secondary: {
          DEFAULT: colorVariable('secondary'),
          foreground: colorVariable('secondary-foreground'),
        },
        destructive: {
          DEFAULT: colorVariable('destructive'),
          foreground: colorVariable('destructive-foreground'),
        },
        muted: {
          DEFAULT: colorVariable('muted'),
          foreground: colorVariable('muted-foreground'),
        },
        accent: {
          DEFAULT: colorVariable('accent'),
          foreground: colorVariable('accent-foreground'),
        },
        popover: {
          DEFAULT: colorVariable('popover'),
          foreground: colorVariable('popover-foreground'),
        },
        card: {
          DEFAULT: colorVariable('card'),
          foreground: colorVariable('card-foreground'),
        },
      },
      borderWidth: {
        hairline: hairlineWidth(),
      },
    },
  },
  plugins: [],
};

function colorVariable(variableName) {
  return `rgb(var(--${variableName}))`;
}

// function withOpacity(variableName) {
//   return ({ opacityValue }) => {
//     if (opacityValue !== undefined) {
//       return platformSelect({
//         ios: `rgb(var(--${variableName}) / ${opacityValue})`,
//         android: `rgb(var(--android-${variableName}) / ${opacityValue})`,
//         default: `rgb(var(--${variableName}) / ${opacityValue})`,
//       });
//     }
//     return platformSelect({
//       ios: `rgb(var(--${variableName}))`,
//       android: `rgb(var(--android-${variableName}))`,
//       default: `rgb(var(--${variableName}))`,
//     });
//   };
// }
