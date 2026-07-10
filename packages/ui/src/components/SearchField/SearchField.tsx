import { useState } from 'react';
import { StyleSheet, TextInput, View, useColorScheme } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { SearchIcon } from '@hugeicons/core-free-icons';

import { darkColors, lightColors, webRadii, webSpacing, webTypography } from '../../tokens';
import { webNoOutline, type FieldVisualState } from '../fieldShell';

export interface SearchFieldProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  testID?: string;
  /** Storybook/docs only — forces the border's visual state without real hover/focus interaction. */
  previewState?: 'default' | 'hover' | 'focused';
}

// Search's default border (neutral-100) is a step lighter than the other fields' neutral-300 —
// matches the Figma "Search by Location" example; hover/focused/disabled follow the same pattern
// as the rest of the field family since Figma only specified the default state.
function getSearchBorderColor(state: FieldVisualState, colors: typeof lightColors | typeof darkColors) {
  switch (state) {
    case 'disabled':
      return colors.neutral[100];
    case 'focused':
      return colors.secondary[600];
    case 'hover':
      return colors.neutral[300];
    default:
      return colors.neutral[100];
  }
}

export function SearchField({
  value,
  onChangeText,
  placeholder = 'Search',
  disabled,
  style,
  testID,
  previewState,
}: SearchFieldProps) {
  const scheme = useColorScheme();
  const colors = scheme === 'dark' ? darkColors : lightColors;
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);

  const state: FieldVisualState = disabled
    ? 'disabled'
    : (previewState ?? (focused ? 'focused' : hovered ? 'hover' : 'default'));
  const borderColor = getSearchBorderColor(state, colors);

  return (
    <View
      style={[styles.frame, { borderColor }, style]}
      testID={testID}
      {...(disabled
        ? null
        : { onPointerEnter: () => setHovered(true), onPointerLeave: () => setHovered(false) })}
    >
      <HugeiconsIcon icon={SearchIcon} size={16} color={colors.neutral[500]} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.neutral[500]}
        editable={!disabled}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={[styles.value, { color: colors.neutral[900] }, webNoOutline]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    minWidth: 320,
    borderWidth: 1,
    borderRadius: webRadii['border-radius-8'],
    paddingHorizontal: webSpacing['space-12'],
    paddingVertical: webSpacing['space-8'],
    gap: webSpacing['space-8'],
  },
  value: {
    flex: 1,
    padding: 0,
    fontFamily: 'type-weight-medium-500',
    fontSize: webTypography.fontSize.label,
    lineHeight: webTypography.lineHeight['type-lh-label'],
  },
});
