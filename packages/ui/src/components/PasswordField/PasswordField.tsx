import { useState } from 'react';
import { Pressable, TextInput, View, useColorScheme } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { ViewIcon, ViewOffIcon } from '@hugeicons/core-free-icons';

import { darkColors, lightColors } from '../../tokens';
import {
  FieldHelperText,
  FieldLabel,
  fieldStyles,
  getFieldBorderColor,
  webNoOutline,
  type FieldVisualState,
} from '../fieldShell';

export interface PasswordFieldProps {
  label: string;
  required?: boolean;
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
  /** Seeds the shown/hidden state — mainly useful for demonstrating the "visible" state in docs. */
  defaultVisible?: boolean;
}

export function PasswordField({
  label,
  required,
  value,
  onChangeText,
  placeholder,
  helperText,
  error,
  disabled,
  style,
  testID,
  previewState,
  defaultVisible = false,
}: PasswordFieldProps) {
  const scheme = useColorScheme();
  const colors = scheme === 'dark' ? darkColors : lightColors;
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(defaultVisible);

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
          secureTextEntry={!visible}
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
        <Pressable onPress={() => setVisible((v) => !v)} disabled={disabled} testID={`${testID}-toggle`}>
          <HugeiconsIcon icon={visible ? ViewOffIcon : ViewIcon} size={16} color={colors.neutral[500]} />
        </Pressable>
        <FieldLabel label={label} required={required} colors={colors} />
      </View>
      <FieldHelperText text={error ?? helperText} error={Boolean(error)} colors={colors} />
    </View>
  );
}
