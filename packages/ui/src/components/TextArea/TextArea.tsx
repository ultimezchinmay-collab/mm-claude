import { useState } from 'react';
import { StyleSheet, TextInput, View, useColorScheme } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

import { darkColors, lightColors } from '../../tokens';
import {
  FieldHelperText,
  FieldLabel,
  fieldStyles,
  getFieldBorderColor,
  webNoOutline,
  type FieldVisualState,
} from '../fieldShell';

export interface TextAreaProps {
  label: string;
  required?: boolean;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  maxLength?: number;
  numberOfLines?: number;
  style?: StyleProp<ViewStyle>;
  testID?: string;
  /** Storybook/docs only — forces the border's visual state without real hover/focus interaction. */
  previewState?: 'default' | 'hover' | 'focused';
}

export function TextArea({
  label,
  required,
  value,
  onChangeText,
  placeholder,
  helperText,
  error,
  disabled,
  maxLength,
  numberOfLines = 3,
  style,
  testID,
  previewState,
}: TextAreaProps) {
  const scheme = useColorScheme();
  const colors = scheme === 'dark' ? darkColors : lightColors;
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
  const counter = maxLength ? `${value.length} / ${maxLength} characters` : undefined;

  return (
    <View style={[fieldStyles.wrapper, style]} testID={testID}>
      <View
        style={[fieldStyles.frame, styles.frame, { borderColor }]}
        {...(disabled
          ? null
          : { onPointerEnter: () => setHovered(true), onPointerLeave: () => setHovered(false) })}
      >
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.neutral[500]}
          editable={!disabled}
          multiline
          numberOfLines={numberOfLines}
          maxLength={maxLength}
          textAlignVertical="top"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={[
            fieldStyles.value,
            styles.value,
            {
              color: valueColor,
              fontFamily: hasValue ? 'type-weight-bold-700' : 'type-weight-medium-500',
            },
            webNoOutline,
          ]}
        />
        <FieldLabel label={label} required={required} colors={colors} />
      </View>
      <FieldHelperText text={error ?? helperText ?? counter} error={Boolean(error)} colors={colors} />
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    alignItems: 'flex-start',
  },
  value: {
    minHeight: 64,
  },
});
