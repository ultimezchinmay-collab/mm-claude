import { lightColors, darkColors } from './colors';

function hexToRgb(hex: string) {
  const clean = hex.replace('#', '');
  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16),
  };
}

function rgbToHex(r: number, g: number, b: number) {
  const toHex = (n: number) => Math.round(n).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/** Blends `tint` onto `base` at `amount` (0-1) opacity — used to derive MD3 surface tint levels. */
function mix(base: string, tint: string, amount: number) {
  const b = hexToRgb(base);
  const t = hexToRgb(tint);
  return rgbToHex(
    b.r + (t.r - b.r) * amount,
    b.g + (t.g - b.g) * amount,
    b.b + (t.b - b.b) * amount
  );
}

/** MD3 surface-tint opacities per elevation level (0-5). */
const TINT_OPACITY = [0, 0.05, 0.08, 0.11, 0.12, 0.14] as const;

function buildElevationColors(surface: string, tint: string) {
  const [level0, level1, level2, level3, level4, level5] = TINT_OPACITY.map((amount) =>
    mix(surface, tint, amount)
  );
  return { level0, level1, level2, level3, level4, level5 };
}

/** Surface-tint colors per elevation level, matching Paper's `MD3ElevationColors`. */
export const elevationColors = {
  light: buildElevationColors(lightColors.background, lightColors.primary[600]),
  dark: buildElevationColors(darkColors.background, darkColors.primary[600]),
} as const;

/** Raw shadow tokens for custom (non-Paper) views — dp values follow MD3 elevation resting states. */
export const shadows = {
  level0: { shadowOffset: { width: 0, height: 0 }, shadowRadius: 0, shadowOpacity: 0, elevation: 0 },
  level1: { shadowOffset: { width: 0, height: 1 }, shadowRadius: 2, shadowOpacity: 0.15, elevation: 1 },
  level2: { shadowOffset: { width: 0, height: 1 }, shadowRadius: 3, shadowOpacity: 0.18, elevation: 3 },
  level3: { shadowOffset: { width: 0, height: 2 }, shadowRadius: 4, shadowOpacity: 0.2, elevation: 6 },
  level4: { shadowOffset: { width: 0, height: 3 }, shadowRadius: 5, shadowOpacity: 0.22, elevation: 8 },
  level5: { shadowOffset: { width: 0, height: 4 }, shadowRadius: 6, shadowOpacity: 0.24, elevation: 12 },
} as const;

export type ElevationLevel = keyof typeof shadows;
