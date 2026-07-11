import { createContext, useContext, useMemo, useState } from 'react';
import type { PropsWithChildren } from 'react';
import { useColorScheme as useSystemColorScheme } from 'react-native';

export type ColorScheme = 'light' | 'dark';

interface ColorSchemeContextValue {
  scheme: ColorScheme;
  /** Pass null to go back to following the system scheme. */
  setScheme: (scheme: ColorScheme | null) => void;
}

const ColorSchemeContext = createContext<ColorSchemeContextValue | null>(null);

export function ColorSchemeProvider({ children }: PropsWithChildren) {
  const systemScheme = useSystemColorScheme();
  const [override, setOverride] = useState<ColorScheme | null>(null);

  const value = useMemo<ColorSchemeContextValue>(
    () => ({
      scheme: override ?? (systemScheme === 'dark' ? 'dark' : 'light'),
      setScheme: setOverride,
    }),
    [override, systemScheme]
  );

  return <ColorSchemeContext.Provider value={value}>{children}</ColorSchemeContext.Provider>;
}

/**
 * Resolved light/dark scheme plus a setter to override it (e.g. a theme toggle).
 * Falls back to the system scheme, with a no-op setter, when used outside a
 * ThemeProvider — safe to call from a standalone component or a test.
 */
export function useAppColorScheme(): ColorSchemeContextValue {
  const ctx = useContext(ColorSchemeContext);
  const systemScheme = useSystemColorScheme();

  if (ctx) return ctx;
  return { scheme: systemScheme === 'dark' ? 'dark' : 'light', setScheme: () => {} };
}
