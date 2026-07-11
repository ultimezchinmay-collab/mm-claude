import type { PropsWithChildren } from 'react';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { buildTheme } from './theme';
import { ColorSchemeProvider, useAppColorScheme } from './ColorSchemeContext';

function ThemedPaperProvider({ children }: PropsWithChildren) {
  const { scheme } = useAppColorScheme();
  const theme = buildTheme(scheme);

  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </SafeAreaProvider>
  );
}

export function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <ColorSchemeProvider>
      <ThemedPaperProvider>{children}</ThemedPaperProvider>
    </ColorSchemeProvider>
  );
}
