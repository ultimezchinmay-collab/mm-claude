import { useState } from 'react';
import type { ReactNode } from 'react';
import { TextInput, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

import { useThemeColors } from '../../theme';
import {
  FieldHelperText,
  FieldLabel,
  fieldStyles,
  getFieldBorderColor,
  webNoOutline,
  type FieldVisualState,
} from '../fieldShell';

export interface TextFieldProps {
  label: string;
  required?: boolean;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  secureTextEntry?: boolean;
  multiline?: boolean;
  rightIcon?: ReactNode;
  style?: StyleProp<ViewStyle>;
  testID?: string;
  /** Storybook/docs only — forces the border's visual state without real hover/focus interaction. */
  previewState?: 'default' | 'hover' | 'focused';
}

export function TextField({
  label,
  required,
  value,
  onChangeText,
  placeholder,
  helperText,
  error,
  disabled,
  secureTextEntry,
  multiline,
  rightIcon,
  style,
  testID,
  previewState,
}: TextFieldProps) {
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
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.neutral[500]}
          editable={!disabled}
          secureTextEntry={secureTextEntry}
          multiline={multiline}
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
        {rightIcon}
        <FieldLabel label={label} required={required} colors={colors} />
      </View>
      <FieldHelperText text={error ?? helperText} error={Boolean(error)} colors={colors} />
    </View>
  );
}
