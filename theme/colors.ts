import { Platform } from 'react-native';

const IOS_SYSTEM_COLORS = {
white: 'rgb(255, 255, 255)',
black: 'rgb(0, 0, 0)',
light: {
  grey6: 'rgb(248, 248, 249)',
  grey5: 'rgb(237, 238, 239)',
  grey4: 'rgb(226, 228, 229)',
  grey3: 'rgb(210, 212, 215)',
  grey2: 'rgb(178, 182, 186)',
  grey: 'rgb(157, 161, 166)',
  background: 'rgb(249, 251, 254)',
  foreground: 'rgb(14, 15, 17)',
  root: 'rgb(249, 251, 254)',
  card: 'rgb(249, 251, 254)',
  destructive: 'rgb(255, 56, 43)',
  primary: 'rgb(0, 123, 255)',
},
dark: {
  grey6: 'rgb(26, 27, 28)',
  grey5: 'rgb(43, 45, 47)',
  grey4: 'rgb(55, 58, 61)',
  grey3: 'rgb(74, 78, 82)',
  grey2: 'rgb(115, 121, 128)',
  grey: 'rgb(155, 160, 165)',
  background: 'rgb(18, 22, 27)',
  foreground: 'rgb(220, 227, 234)',
  root: 'rgb(18, 22, 27)',
  card: 'rgb(18, 22, 27)',
  destructive: 'rgb(254, 67, 54)',
  primary: 'rgb(0, 123, 255)',
},
} as const;

const ANDROID_COLORS = {
white: 'rgb(255, 255, 255)',
black: 'rgb(0, 0, 0)',
light: {
  grey6: 'rgb(248, 248, 248)',
  grey5: 'rgb(237, 238, 239)',
  grey4: 'rgb(226, 227, 229)',
  grey3: 'rgb(210, 212, 214)',
  grey2: 'rgb(178, 181, 185)',
  grey: 'rgb(156, 161, 166)',
  background: 'rgb(248, 251, 254)',
  foreground: 'rgb(16, 17, 18)',
  root: 'rgb(248, 251, 254)',
  card: 'rgb(248, 251, 254)',
  destructive: 'rgb(186, 26, 26)',
  primary: 'rgb(0, 111, 231)',
},
dark: {
  grey6: 'rgb(26, 27, 29)',
  grey5: 'rgb(44, 46, 48)',
  grey4: 'rgb(56, 58, 62)',
  grey3: 'rgb(75, 79, 83)',
  grey2: 'rgb(116, 122, 128)',
  grey: 'rgb(156, 160, 165)',
  background: 'rgb(18, 22, 26)',
  foreground: 'rgb(221, 227, 234)',
  root: 'rgb(18, 22, 26)',
  card: 'rgb(18, 22, 26)',
  destructive: 'rgb(147, 0, 10)',
  primary: 'rgb(41, 144, 255)',
},
} as const;

const WEB_COLORS = {
white: 'rgb(255, 255, 255)',
black: 'rgb(0, 0, 0)',
light: {
  grey6: 'rgb(247, 248, 248)',
  grey5: 'rgb(237, 238, 239)',
  grey4: 'rgb(226, 227, 229)',
  grey3: 'rgb(210, 212, 214)',
  grey2: 'rgb(178, 181, 185)',
  grey: 'rgb(156, 161, 166)',
  background: 'rgb(248, 251, 254)',
  foreground: 'rgb(16, 17, 19)',
  root: 'rgb(248, 251, 254)',
  card: 'rgb(248, 251, 254)',
  destructive: 'rgb(186, 26, 26)',
  primary: 'rgb(0, 110, 227)',
},
dark: {
  grey6: 'rgb(26, 27, 29)',
  grey5: 'rgb(44, 46, 48)',
  grey4: 'rgb(56, 58, 61)',
  grey3: 'rgb(75, 79, 83)',
  grey2: 'rgb(116, 122, 128)',
  grey: 'rgb(156, 160, 165)',
  background: 'rgb(18, 22, 26)',
  foreground: 'rgb(221, 227, 234)',
  root: 'rgb(18, 22, 26)',
  card: 'rgb(18, 22, 26)',
  destructive: 'rgb(147, 0, 10)',
  primary: 'rgb(37, 143, 255)',
},
} as const;

const COLORS =
Platform.OS === 'ios'
  ? IOS_SYSTEM_COLORS
  : Platform.OS === 'android'
    ? ANDROID_COLORS
    : WEB_COLORS;

export { COLORS };