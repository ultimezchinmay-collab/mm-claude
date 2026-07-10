import { PropsWithChildren } from 'react';
import { useColorScheme } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { buildTheme } from './theme';

export function ThemeProvider({ children }: PropsWithChildren) {
  const scheme = useColorScheme();
  const theme = buildTheme(scheme === 'dark' ? 'dark' : 'light');

  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </SafeAreaProvider>
  );
}
