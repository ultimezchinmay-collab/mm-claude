import { darkColors, lightColors } from '../tokens';
import { useAppColorScheme } from './ColorSchemeContext';

/** The active color token set (light/dark), respecting any manual override from a theme toggle. */
export function useThemeColors() {
  const { scheme } = useAppColorScheme();
  return scheme === 'dark' ? darkColors : lightColors;
}
