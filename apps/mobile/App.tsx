import type { ReactNode } from 'react';
import {
  useFonts,
  BeVietnamPro_400Regular,
  BeVietnamPro_500Medium,
  BeVietnamPro_600SemiBold,
  BeVietnamPro_700Bold,
  BeVietnamPro_800ExtraBold,
} from '@expo-google-fonts/be-vietnam-pro';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';

import { AppTheme, Typography, ThemeProvider } from '@meetmedico/ui';

function DesignSystemScreen() {
  const theme = useTheme<AppTheme>();
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Typography variant="headlineSmall">MeetMedico Design System</Typography>
      <StatusBar style="auto" />
    </View>
  );
}

function DesignSystemApp() {
  return (
    <ThemeProvider>
      <DesignSystemScreen />
    </ThemeProvider>
  );
}

/** Loads Be Vietnam Pro before rendering the app. */
function FontGate({ children }: { children: ReactNode }) {
  const [fontsLoaded] = useFonts({
    'type-weight-regular-400': BeVietnamPro_400Regular,
    'type-weight-medium-500': BeVietnamPro_500Medium,
    'type-weight-semi-bold-600': BeVietnamPro_600SemiBold,
    'type-weight-bold-700': BeVietnamPro_700Bold,
    'type-weight-extra-bold-800': BeVietnamPro_800ExtraBold,
  });

  if (!fontsLoaded) return null;
  return <>{children}</>;
}

export default function App() {
  return (
    <FontGate>
      <DesignSystemApp />
    </FontGate>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
