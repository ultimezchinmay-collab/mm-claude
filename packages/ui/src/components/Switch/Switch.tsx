import { Pressable, StyleSheet, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

import { useThemeColors } from '../../theme';

export interface SwitchProps {
  value?: boolean;
  onValueChange?: (value: boolean) => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  testID?: string;
}

export function Switch({ value, onValueChange, disabled, style, testID }: SwitchProps) {
  const colors = useThemeColors();

  return (
    <Pressable
      onPress={disabled ? undefined : () => onValueChange?.(!value)}
      disabled={disabled}
      testID={testID}
      style={[
        styles.track,
        { backgroundColor: value ? colors.primary[600] : colors.neutral[300] },
        disabled ? styles.disabled : null,
        style,
      ]}
    >
      <View style={[styles.thumb, { backgroundColor: colors.white[900] }, value ? styles.thumbOn : styles.thumbOff]} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  track: {
    width: 40,
    height: 24,
    borderRadius: 28,
    padding: 4,
    justifyContent: 'center',
  },
  thumb: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
  thumbOff: {
    alignSelf: 'flex-start',
  },
  thumbOn: {
    alignSelf: 'flex-end',
  },
  disabled: {
    opacity: 0.5,
  },
});
