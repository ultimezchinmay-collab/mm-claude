import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

import { webTypography } from '../../tokens';
import { useThemeColors } from '../../theme';
import {
  FieldHelperText,
  FieldLabel,
  fieldStyles,
  getFieldBorderColor,
  webNoOutline,
  type FieldVisualState,
} from '../fieldShell';

export interface PhoneNumberInputProps {
  label: string;
  required?: boolean;
  /** e.g. '+91' */
  countryCode: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  testID?: string;
  /** Storybook/docs only — forces the border's visual state without real hover/focus interaction. */
  previewState?: 'default' | 'hover' | 'focused';
}

export function PhoneNumberInput({
  label,
  required,
  countryCode,
  value,
  onChangeText,
  placeholder,
  helperText,
  error,
  disabled,
  style,
  testID,
  previewState,
}: PhoneNumberInputProps) {
  const colors = useThemeColors();
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);

  const hasValue = value.length > 0;
  const state: FieldVisualState = disabled
    ? 'disabled'
    : error
      ? 'error'
      : (previewState ?? (focused ? 'focused' : hovered ? 'hover' : 'default'));

  const borderColor = getFieldBorderColor(state, colors);
  const valueColor = disabled || !hasValue ? colors.neutral[500] : colors.neutral[900];

  return (
    <View style={[fieldStyles.wrapper, style]} testID={testID}>
      <View
        style={[fieldStyles.frame, { borderColor }]}
        {...(disabled
          ? null
          : { onPointerEnter: () => setHovered(true), onPointerLeave: () => setHovered(false) })}
      >
        <Text style={[styles.countryCode, { color: colors.neutral[500] }]}>{countryCode}</Text>
        <View style={[styles.divider, { backgroundColor: colors.neutral[300] }]} />
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.neutral[500]}
          editable={!disabled}
          keyboardType="phone-pad"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={[
            fieldStyles.value,
            {
              color: valueColor,
              fontFamily: hasValue ? 'type-weight-bold-700' : 'type-weight-medium-500',
            },
            webNoOutline,
          ]}
        />
        <FieldLabel label={label} required={required} colors={colors} />
      </View>
      <FieldHelperText text={error ?? helperText} error={Boolean(error)} colors={colors} />
    </View>
  );
}

const styles = StyleSheet.create({
  countryCode: {
    fontFamily: 'type-weight-medium-500',
    fontSize: webTypography.fontSize.label,
    lineHeight: webTypography.lineHeight['type-lh-label'],
  },
  divider: {
    width: 1,
    height: 20,
  },
});
