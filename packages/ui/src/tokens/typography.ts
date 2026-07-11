export const webTypography = {
  fontSize: {
    display: 40,
    'heading-h1': 32,
    'sub-heading-h2': 28,
    'title-h3': 20,
    'sub-title-h4': 16,
    'body-p1': 18,
    label: 14,
    caption: 12,
  },

  lineHeight: {
    'type-lh-display': 52,
    'type-lh-heading-h1': 42,
    'type-lh-sub-heading-h2': 36,
    'type-lh-title-h3': 26,
    'type-lh-sub-title-h4': 20,
    'type-lh-body-p1': 24,
    'type-lh-label': 18,
    'type-lh-caption': 16,
  },

  fontFamily: {
    'type-family-primary': 'Be Vietnam Pro',
  },

  fontWeight: {
    'type-weight-extra-bold-800': '800',
    'type-weight-bold-700': '700',
    'type-weight-semi-bold-600': '600',
    'type-weight-medium-500': '500',
    'type-weight-regular-400': '400',
  },
} as const;

export const mobileTypography = {
  fontSize: {
    display: 30,
    'heading-h1': 24,
    'sub-heading-h2': 20,
    'title-h3': 16,
    'sub-title-h4': 14,
    'body-p1': 16,
    label: 12,
    caption: 10,
  },

  lineHeight: {
    'type-lh-display': 40,
    'type-lh-heading-h1': 32,
    'type-lh-sub-heading-h2': 26,
    'type-lh-title-h3': 20,
    'type-lh-sub-title-h4': 18,
    'type-lh-body-p1': 18,
    'type-lh-label': 16,
    'type-lh-caption': 13,
  },

  fontFamily: {
    'type-family-primary': 'Be Vietnam Pro',
  },

  fontWeight: {
    'type-weight-extra-bold-800': '800',
    'type-weight-bold-700': '700',
    'type-weight-semi-bold-600': '600',
    'type-weight-medium-500': '500',
    'type-weight-regular-400': '400',
  },
} as const;

export type TypographyScale = typeof mobileTypography;

/**
 * Matches react-native-paper's MD3TypescaleKey (displayLarge...bodySmall) — the
 * Typography component passes `variant` straight through to Paper's own <Text>,
 * so this reflects what's actually accepted at runtime rather than our own
 * webTypography/mobileTypography key names, which use different naming and
 * don't have a 1:1 mapping to Paper's 15-variant scale.
 */
export type TypeScaleKey =
  | 'displayLarge'
  | 'displayMedium'
  | 'displaySmall'
  | 'headlineLarge'
  | 'headlineMedium'
  | 'headlineSmall'
  | 'titleLarge'
  | 'titleMedium'
  | 'titleSmall'
  | 'labelLarge'
  | 'labelMedium'
  | 'labelSmall'
  | 'bodyLarge'
  | 'bodyMedium'
  | 'bodySmall';
