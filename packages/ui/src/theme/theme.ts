import { MD3DarkTheme, MD3LightTheme, type MD3Theme } from 'react-native-paper';

import { darkColors, elevationColors, lightColors } from '../tokens';

const fonts = MD3LightTheme.fonts;

export type AppTheme = MD3Theme;

/**
 * Maps our token color scales onto Paper's flat MD3 color roles. Only roles we
 * have a confident token equivalent for are overridden here (primary/secondary/
 * error families, background, surface, outline) — tertiary/shadow/scrim/inverse*
 * etc. have no equivalent in tokens/colors.ts, so they're left as Paper's own
 * MD3 defaults rather than guessed at.
 */
function buildMD3Colors(
  colors: typeof lightColors | typeof darkColors,
  elevation: typeof elevationColors.light
): Partial<MD3Theme['colors']> {
  return {
    primary: colors.primary[600],
    onPrimary: colors.white[900],
    primaryContainer: colors.primary[50],
    onPrimaryContainer: colors.primary[600],

    secondary: colors.secondary[600],
    onSecondary: colors.white[900],
    secondaryContainer: colors.secondary[50],
    onSecondaryContainer: colors.secondary[600],

    error: colors.error[600],
    onError: colors.white[900],
    errorContainer: colors.error[50],
    onErrorContainer: colors.error[600],

    background: colors.background,
    onBackground: colors.neutral[900],

    surface: colors.white[900],
    onSurface: colors.neutral[900],
    surfaceVariant: colors.neutral[50],
    onSurfaceVariant: colors.neutral[600],
    surfaceDisabled: colors.neutral[100],
    onSurfaceDisabled: colors.neutral[500],

    outline: colors.neutral[100],

    elevation,
  };
}

export const lightTheme: AppTheme = {
  ...MD3LightTheme,
  roundness: 8,
  colors: {
    ...MD3LightTheme.colors,
    ...buildMD3Colors(lightColors, elevationColors.light),
  },
  fonts,
};

export const darkTheme: AppTheme = {
  ...MD3DarkTheme,
  roundness: 8,
  colors: {
    ...MD3DarkTheme.colors,
    ...buildMD3Colors(darkColors, elevationColors.dark),
  },
  fonts,
};

export function buildTheme(scheme: 'light' | 'dark'): AppTheme {
  return scheme === 'dark' ? darkTheme : lightTheme;
}
