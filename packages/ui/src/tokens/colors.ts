type ColorScale = {
  900: string;
  600: string;
  500: string;
  300: string;
  100: string;
  50: string;
};

export const lightColors = {
  neutral: {
    900: '#141919',
    600: '#141919CC',
    500: '#14191980',
    300: '#14191933',
    100: '#1419191A',
    50: '#1419190D',
  } satisfies ColorScale,

  white: {
    900: '#FFFFFF',
    600: '#FFFFFFCC',
    500: '#FFFFFF80',
    300: '#FFFFFF33',
    100: '#FFFFFF1A',
    50: '#FFFFFF0D',
  } satisfies ColorScale,

  primary: {
    900: '#147747',
    600: '#1DAA65',
    500: '#1DAA6580',
    300: '#1DAA6533',
    100: '#1DAA651A',
    50: '#1DAA650D',
  } satisfies ColorScale,

  secondary: {
    900: '#1A57B3',
    600: '#257CFF',
    500: '#257CFF80',
    300: '#257CFF33',
    100: '#257CFF1A',
    50: '#257CFF0D',
  } satisfies ColorScale,

  success: {
    900: '#166437',
    600: '#1F8F4F',
    500: '#1F8F4F80',
    300: '#1F8F4F33',
    100: '#1F8F4F1A',
    50: '#1F8F4F0D',
  } satisfies ColorScale,

  error: {
    900: '#690F0F',
    600: '#E52525',
    500: '#E5252580',
    300: '#E5252533',
    100: '#E525251A',
    50: '#E525250D',
  } satisfies ColorScale,

  warning: {
    900: '#A26E03',
    600: '#CA8A04',
    500: '#CA8A0480',
    300: '#CA8A0433',
    100: '#CA8A041A',
    50: '#CA8A040D',
  } satisfies ColorScale,

  background: '#FFFFFF',
  dashboardBackground: '#F0FDF6',
  buttonBackground: '#1DAA65',
  buttonTextIconDark: '#0A0A0A',
  buttonTextIconLight: '#FFFFFF',
  cardBackground: '#FFFFFF',
} as const;

export const darkColors = {
  neutral: {
    900: '#FFFFFF',
    600: '#FFFFFFCC',
    500: '#FFFFFF80',
    300: '#FFFFFF33',
    100: '#FFFFFF1A',
    50: '#FFFFFF0D',
  } satisfies ColorScale,

  white: {
    900: '#141919',
    600: '#141919CC',
    500: '#14191980',
    300: '#14191933',
    100: '#1419191A',
    50: '#1419190D',
  } satisfies ColorScale,

  primary: {
    900: '#147747',
    600: '#1DAA65',
    500: '#1DAA6580',
    300: '#1DAA6533',
    100: '#1DAA651A',
    50: '#1DAA650D',
  } satisfies ColorScale,

  secondary: {
    900: '#5196FF',
    600: '#257CFF',
    500: '#257CFF80',
    300: '#257CFF33',
    100: '#257CFF1A',
    50: '#257CFF0D',
  } satisfies ColorScale,

  success: {
    900: '#4CA572',
    600: '#1F8F4F',
    500: '#1F8F4F80',
    300: '#1F8F4F33',
    100: '#1F8F4F1A',
    50: '#1F8F4F0D',
  } satisfies ColorScale,

  error: {
    900: '#EA5151',
    600: '#EE5522',
    500: '#96161680',
    300: '#96161633',
    100: '#9616161A',
    50: '#9616160D',
  } satisfies ColorScale,

  warning: {
    900: '#D5A136',
    600: '#CA8A04',
    500: '#CA8A0480',
    300: '#CA8A0433',
    100: '#CA8A041A',
    50: '#CA8A040D',
  } satisfies ColorScale,

  background: '#0A0A0A',
  dashboardBackground: '#0A0A0A',
  buttonBackground: '#1DAA65',
  buttonTextIconDark: '#0A0A0A',
  buttonTextIconLight: '#FFFFFF',
  cardBackground: '#14191980',
} as const;

export type Colors = typeof lightColors;
