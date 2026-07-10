import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';

import { darkColors, lightColors, webRadii, webSpacing, webTypography } from '../tokens';

export type FieldVisualState = 'default' | 'hover' | 'focused' | 'error' | 'disabled';

export function getFieldBorderColor(state: FieldVisualState, colors: typeof lightColors | typeof darkColors) {
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

/** Suppresses the browser's native focus ring on react-native-web inputs; no-op on native. */
export const webNoOutline = Platform.OS === 'web' ? ({ outlineStyle: 'none' } as Record<string, string>) : null;

export function FieldLabel({
  label,
  required,
  colors,
}: {
  label: string;
  required?: boolean;
  colors: typeof lightColors | typeof darkColors;
}) {
  return (
    <View style={[fieldStyles.labelWrap, { backgroundColor: colors.white[900] }]}>
      <Text style={[fieldStyles.label, { color: colors.neutral[600] }]}>
        {label}
        {required ? <Text style={{ color: colors.primary[600] }}> *</Text> : null}
      </Text>
    </View>
  );
}

export function FieldHelperText({
  text,
  error,
  colors,
}: {
  text?: string;
  error?: boolean;
  colors: typeof lightColors | typeof darkColors;
}) {
  if (!text) return null;
  return (
    <Text style={[fieldStyles.helper, { color: error ? colors.error[600] : colors.neutral[500] }]}>{text}</Text>
  );
}

export interface PickerTriggerFieldProps {
  label: string;
  required?: boolean;
  value: string;
  onPress?: () => void;
  placeholder?: string;
  icon: IconSvgElement;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  testID?: string;
  /** Storybook/docs only — forces the border's visual state without real interaction. */
  previewState?: FieldVisualState;
  colors: typeof lightColors | typeof darkColors;
}

/** Shared shell for trigger-only fields (Date/Time pickers) — the actual native picker UI is the consumer's responsibility. */
export function PickerTriggerField({
  label,
  required,
  value,
  onPress,
  placeholder,
  icon,
  helperText,
  error,
  disabled,
  style,
  testID,
  previewState,
  colors,
}: PickerTriggerFieldProps) {
  const hasValue = value.length > 0;
  const state: FieldVisualState = disabled ? 'disabled' : error ? 'error' : (previewState ?? 'default');
  const borderColor = getFieldBorderColor(state, colors);
  const valueColor = disabled || !hasValue ? colors.neutral[500] : colors.neutral[900];

  return (
    <View style={[fieldStyles.wrapper, style]}>
      <Pressable style={[fieldStyles.frame, { borderColor }]} onPress={onPress} disabled={disabled} testID={testID}>
        <Text
          numberOfLines={1}
          style={[
            fieldStyles.value,
            { color: valueColor, fontFamily: hasValue ? 'type-weight-bold-700' : 'type-weight-medium-500' },
          ]}
        >
          {hasValue ? value : placeholder}
        </Text>
        <HugeiconsIcon icon={icon} size={16} color={colors.neutral[500]} />
        <FieldLabel label={label} required={required} colors={colors} />
      </Pressable>
      <FieldHelperText text={error ?? helperText} error={Boolean(error)} colors={colors} />
    </View>
  );
}

export const fieldStyles = StyleSheet.create({
  wrapper: {
    marginTop: webSpacing['space-8'],
  },
  frame: {
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
