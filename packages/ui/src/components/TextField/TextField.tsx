import { useState } from 'react';
import type { ReactNode } from 'react';
import { StyleSheet, Text, TextInput, View, useColorScheme } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

import { darkColors, lightColors, webRadii, webSpacing, webTypography } from '../../tokens';

type VisualState = 'default' | 'hover' | 'focused' | 'error' | 'disabled';

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

function getBorderColor(state: VisualState, colors: typeof lightColors | typeof darkColors) {
  switch (state) {
    case 'disabled':
      return colors.neutral[100];
    case 'error':
      return colors.error[600];
    case 'focused':
      return colors.secondary[600];
    case 'hover':
      return colors.neutral[500];
    default:
      return colors.neutral[300];
  }
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
  const scheme = useColorScheme();
  const colors = scheme === 'dark' ? darkColors : lightColors;
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);

  const hasValue = value.length > 0;
  const state: VisualState = disabled
    ? 'disabled'
    : error
      ? 'error'
      : (previewState ?? (focused ? 'focused' : hovered ? 'hover' : 'default'));

  const borderColor = getBorderColor(state, colors);
  const valueColor = hasValue ? colors.neutral[900] : colors.neutral[500];
  const helper = error ?? helperText;
  const helperColor = error ? colors.error[600] : colors.neutral[500];

  return (
    <View style={[styles.wrapper, style]} testID={testID}>
      <View
        style={[styles.inputFrame, { borderColor }]}
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
            styles.value,
            { color: disabled ? colors.neutral[500] : valueColor, fontFamily: hasValue ? 'type-weight-bold-700' : 'type-weight-medium-500' },
          ]}
        />
        {rightIcon}
        <View style={[styles.labelWrap, { backgroundColor: colors.white[900] }]}>
          <Text style={[styles.label, { color: colors.neutral[600] }]}>
            {label}
            {required ? <Text style={{ color: colors.primary[600] }}> *</Text> : null}
          </Text>
        </View>
      </View>
      {helper ? <Text style={[styles.helper, { color: helperColor }]}>{helper}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: webSpacing['space-8'],
  },
  inputFrame: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: webRadii['border-radius-8'],
    paddingHorizontal: webSpacing['space-12'],
    paddingVertical: webSpacing['space-12'],
    gap: webSpacing['space-8'],
  },
  value: {
    flex: 1,
    padding: 0,
    fontSize: webTypography.fontSize.label,
    lineHeight: webTypography.lineHeight['type-lh-label'],
  },
  labelWrap: {
    position: 'absolute',
    top: -8,
    left: webSpacing['space-8'],
    paddingHorizontal: webSpacing['space-4'],
  },
  label: {
    fontFamily: 'type-weight-medium-500',
    fontSize: webTypography.fontSize.caption,
    lineHeight: webTypography.lineHeight['type-lh-caption'],
  },
  helper: {
    marginTop: webSpacing['space-4'],
    fontFamily: 'type-weight-medium-500',
    fontSize: webTypography.fontSize.caption,
    lineHeight: webTypography.lineHeight['type-lh-caption'],
  },
});
