import { useRef } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

import { webRadii, webSpacing, webTypography } from '../../tokens';
import { useThemeColors } from '../../theme';
import { webNoOutline } from '../fieldShell';

export interface OTPInputProps {
  label?: string;
  required?: boolean;
  length?: number;
  value: string[];
  onChange: (value: string[]) => void;
  error?: string;
  disabled?: boolean;
  /** Seconds remaining before resend is available; 0 or omitted enables the Resend link. */
  resendSeconds?: number;
  onResend?: () => void;
  style?: StyleProp<ViewStyle>;
  testID?: string;
}

export function OTPInput({
  label = 'Enter OTP',
  required = true,
  length = 6,
  value,
  onChange,
  error,
  disabled,
  resendSeconds = 0,
  onResend,
  style,
  testID,
}: OTPInputProps) {
  const colors = useThemeColors();
  const inputs = useRef<(TextInput | null)[]>([]);

  const borderColor = disabled ? colors.neutral[100] : error ? colors.error[600] : colors.neutral[300];

  function setDigit(index: number, digit: string) {
    const next = [...value];
    next[index] = digit.slice(-1);
    onChange(next);
    if (digit && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }
  }

  function handleKeyPress(index: number, key: string) {
    if (key === 'Backspace' && !value[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  }

  return (
    <View style={[styles.wrapper, style]} testID={testID}>
      <Text style={[styles.label, { color: colors.neutral[600] }]}>
        {label}
        {required ? <Text style={{ color: colors.primary[600] }}> *</Text> : null}
      </Text>
      <View style={styles.row}>
        {Array.from({ length }).map((_, index) => (
          <TextInput
            key={index}
            ref={(el) => {
              inputs.current[index] = el;
            }}
            value={value[index] ?? ''}
            onChangeText={(text) => setDigit(index, text)}
            onKeyPress={({ nativeEvent }) => handleKeyPress(index, nativeEvent.key)}
            editable={!disabled}
            maxLength={1}
            keyboardType="number-pad"
            textAlign="center"
            style={[
              styles.box,
              { borderColor, color: colors.neutral[900] },
              disabled ? styles.disabled : null,
              webNoOutline,
            ]}
            testID={testID ? `${testID}-${index}` : undefined}
          />
        ))}
      </View>
      <View style={styles.footer}>
        <Text style={[styles.footerText, { color: colors.neutral[500] }]}>
          {resendSeconds > 0 ? `Request OTP in 00:${String(resendSeconds).padStart(2, '0')}s` : ''}
        </Text>
        <Pressable onPress={resendSeconds > 0 ? undefined : onResend} disabled={resendSeconds > 0}>
          <Text style={[styles.resend, { color: colors.primary[600], opacity: resendSeconds > 0 ? 0.5 : 1 }]}>
            Resend OTP
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: webSpacing['space-4'],
  },
  label: {
    fontFamily: 'type-weight-medium-500',
    fontSize: webTypography.fontSize.caption,
    lineHeight: webTypography.lineHeight['type-lh-caption'],
  },
  row: {
    flexDirection: 'row',
    gap: webSpacing['space-8'],
  },
  box: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: webRadii['border-radius-8'],
    padding: 0,
    fontFamily: 'type-weight-medium-500',
    fontSize: webTypography.fontSize.label,
  },
  disabled: {
    opacity: 0.5,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: webSpacing['space-8'],
  },
  footerText: {
    fontFamily: 'type-weight-medium-500',
    fontSize: webTypography.fontSize.caption,
    lineHeight: webTypography.lineHeight['type-lh-caption'],
  },
  resend: {
    fontFamily: 'type-weight-bold-700',
    fontSize: webTypography.fontSize.label,
    lineHeight: webTypography.lineHeight['type-lh-label'],
  },
});
