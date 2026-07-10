import { MD3DarkTheme, MD3LightTheme, type MD3Theme } from 'react-native-paper';

import { darkColors, elevationColors, lightColors } from '../tokens';

const fonts = MD3LightTheme.fonts;

export type AppTheme = MD3Theme;

export const lightTheme: AppTheme = {
  ...MD3LightTheme,
  roundness: 8,
  colors: {
    ...MD3LightTheme.colors,
    ...lightColors,
    elevation: elevationColors.light,
  },
  fonts,
};

export const darkTheme: AppTheme = {
  ...MD3DarkTheme,
  roundness: 8,
  colors: {
    ...MD3DarkTheme.colors,
    ...darkColors,
    elevation: elevationColors.dark,
  },
  fonts,
};

export function buildTheme(scheme: 'light' | 'dark'): AppTheme {
  return scheme === 'dark' ? darkTheme : lightTheme;
}
