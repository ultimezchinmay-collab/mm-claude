import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

import { useThemeColors } from '../../theme';

export interface RadioProps {
  selected?: boolean;
  onPress?: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  testID?: string;
  /** Storybook/docs only — forces a visual state without real hover interaction. */
  previewState?: 'default' | 'hover';
}

/** Matches Checkbox's visual language (same border-color states), just circular. */
export function Radio({ selected, onPress, disabled, style, testID, previewState }: RadioProps) {
  const colors = useThemeColors();
  const [hovered, setHovered] = useState(false);

  const isHovered = previewState === 'hover' || (hovered && !previewState);
  const borderColor = selected
    ? colors.primary[600]
    : disabled
      ? colors.neutral[100]
      : isHovered
        ? colors.neutral[500]
        : colors.neutral[300];

  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      disabled={disabled}
      testID={testID}
      style={[styles.outer, { borderColor }, disabled ? styles.disabled : null, style]}
    >
      {selected ? <View style={[styles.dot, { backgroundColor: colors.primary[600] }]} /> : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  outer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  disabled: {
    opacity: 0.5,
  },
});
