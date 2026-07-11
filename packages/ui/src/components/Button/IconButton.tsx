import { useState } from 'react';
import type { ReactNode } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

import { darkColors, lightColors, webSpacing, webRadii } from '../../tokens';
import { useThemeColors } from '../../theme';

export type IconButtonVariant = 'primary' | 'secondary' | 'back';
type VisualState = 'default' | 'hover' | 'disabled';

export interface IconButtonProps {
  icon: ReactNode;
  variant?: IconButtonVariant;
  onPress?: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  testID?: string;
  /** Storybook/docs only — forces a visual state without real hover interaction. */
  previewState?: VisualState;
}

function getColors(variant: IconButtonVariant, state: VisualState, colors: typeof lightColors | typeof darkColors) {
  if (variant === 'primary') {
    const backgroundColor =
      state === 'hover' ? colors.primary[900] : state === 'disabled' ? colors.primary[500] : colors.primary[600];
    return { backgroundColor, borderColor: 'transparent' };
  }
  if (variant === 'secondary') {
    const backgroundColor = state === 'hover' ? colors.primary[50] : 'transparent';
    const borderColor = state === 'hover' ? colors.primary[500] : colors.neutral[100];
    return { backgroundColor, borderColor };
  }
  // back — no hover spec in Figma; mirrors secondary's pattern using the neutral scale instead of primary
  const backgroundColor = state === 'hover' ? colors.neutral[50] : 'transparent';
  const borderColor = state === 'hover' ? colors.neutral[300] : colors.neutral[100];
  return { backgroundColor, borderColor };
}

export function IconButton({
  icon,
  variant = 'primary',
  onPress,
  disabled,
  style,
  testID,
  previewState,
}: IconButtonProps) {
  const colors = useThemeColors();
  const [hovered, setHovered] = useState(false);

  const state: VisualState = previewState ?? (disabled ? 'disabled' : hovered ? 'hover' : 'default');
  const { backgroundColor, borderColor } = getColors(variant, state, colors);

  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      disabled={disabled}
      testID={testID}
      style={[styles.base, { backgroundColor, borderColor }, disabled ? styles.disabled : null, style]}
    >
      {icon}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: webRadii['border-radius-8'],
    borderWidth: 1,
    padding: webSpacing['space-8'],
  },
  disabled: {
    opacity: 0.5,
  },
});
