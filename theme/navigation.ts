import { DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';

import { colors, Scheme } from './colors';

function rgb(name: string, scheme: Scheme) {
  return `rgb(${colors[scheme][name]})`;
}

export const NAV_THEME: Record<Scheme, Theme> = {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background : rgb('--background', 'light'),
      card       : rgb('--card', 'light'),
      text       : rgb('--foreground', 'light'),
      border     : rgb('--border', 'light'),
      primary    : rgb('--primary', 'light'),
      notification: rgb('--destructive', 'light'),
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background : rgb('--background', 'dark'),
      card       : rgb('--card', 'dark'),
      text       : rgb('--foreground', 'dark'),
      border     : rgb('--border', 'dark'),
      primary    : rgb('--primary', 'dark'),
      notification: rgb('--destructive', 'dark'),
    },
  },
};
