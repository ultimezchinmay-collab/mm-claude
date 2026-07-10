import { useState } from 'react';
import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, useColorScheme } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

import { darkColors, lightColors, webSpacing, webRadii, webTypography } from '../../tokens';

export type ButtonVariant = 'primary' | 'secondary' | 'text-link';
type VisualState = 'default' | 'hover' | 'disabled';

export interface ButtonProps {
  label: string;
  variant?: ButtonVariant;
  onPress?: () => void;
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  style?: StyleProp<ViewStyle>;
  testID?: string;
  /** Storybook/docs only — forces a visual state without real hover interaction. */
  previewState?: VisualState;
}

function getColors(variant: ButtonVariant, state: VisualState, colors: typeof lightColors | typeof darkColors) {
  if (variant === 'primary') {
    const backgroundColor =
      state === 'hover' ? colors.primary[900] : state === 'disabled' ? colors.primary[500] : colors.primary[600];
    return { backgroundColor, borderColor: 'transparent', labelColor: colors.buttonTextIconLight };
  }
  if (variant === 'secondary') {
    const backgroundColor = state === 'hover' ? colors.primary[50] : 'transparent';
    const borderColor = state === 'hover' ? colors.primary[500] : colors.neutral[100];
    const labelColor = state === 'disabled' ? colors.primary[500] : colors.primary[600];
    return { backgroundColor, borderColor, labelColor };
  }
  // text-link
  const labelColor = state === 'disabled' ? colors.primary[500] : colors.primary[600];
  return { backgroundColor: 'transparent', borderColor: 'transparent', labelColor };
}

export function Button({
  label,
  variant = 'primary',
  onPress,
  disabled,
  leftIcon,
  rightIcon,
  style,
  testID,
  previewState,
}: ButtonProps) {
  const scheme = useColorScheme();
  const colors = scheme === 'dark' ? darkColors : lightColors;
  const [hovered, setHovered] = useState(false);

  const state: VisualState = previewState ?? (disabled ? 'disabled' : hovered ? 'hover' : 'default');
  const { backgroundColor, borderColor, labelColor } = getColors(variant, state, colors);
  const isTextLink = variant === 'text-link';

  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      disabled={disabled}
      testID={testID}
      style={[
        styles.base,
        isTextLink ? styles.textLink : styles.pill,
        { backgroundColor, borderColor },
        isTextLink && state === 'hover' ? { borderBottomWidth: 1, borderBottomColor: colors.primary[600] } : null,
        style,
      ]}
    >
      {leftIcon}
      <Text style={[styles.label, { color: labelColor }]}>{label}</Text>
      {rightIcon}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pill: {
    height: 36,
    paddingHorizontal: webSpacing['space-16'],
    paddingVertical: webSpacing['space-12'],
    borderRadius: webRadii['border-radius-8'],
    borderWidth: 1,
    gap: webSpacing['space-8'],
  },
  textLink: {
    paddingVertical: webSpacing['space-4'],
    gap: webSpacing['space-4'],
    borderBottomWidth: 0,
  },
  label: {
    // Custom fonts are registered per weight (see App.tsx FontGate) — the family
    // name IS the weight token, since RN can't switch weights within one font file.
    fontFamily: 'type-weight-bold-700',
    fontSize: webTypography.fontSize.label,
    lineHeight: webTypography.lineHeight['type-lh-label'],
  },
});
