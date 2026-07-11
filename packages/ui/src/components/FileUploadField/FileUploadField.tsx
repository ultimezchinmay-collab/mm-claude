import { Pressable, Text, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import { Image01Icon } from '@hugeicons/core-free-icons';

import { useThemeColors } from '../../theme';
import { FieldLabel, fieldStyles, type FieldVisualState } from '../fieldShell';

export interface FileUploadFieldProps {
  label: string;
  required?: boolean;
  /** Uploaded file name — shown in place of the placeholder once present. */
  fileName?: string;
  placeholder?: string;
  /** Defaults to an image icon; pass a document icon for document-upload use cases. */
  icon?: IconSvgElement;
  status?: 'default' | 'success' | 'error';
  helperText?: string;
  onPress?: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  testID?: string;
}

export function FileUploadField({
  label,
  required,
  fileName,
  placeholder = 'Select File',
  icon = Image01Icon,
  status = 'default',
  helperText,
  onPress,
  disabled,
  style,
  testID,
}: FileUploadFieldProps) {
  const colors = useThemeColors();

  const state: FieldVisualState = disabled ? 'disabled' : status === 'error' ? 'error' : 'default';
  const borderColor =
    state === 'disabled'
      ? colors.neutral[100]
      : status === 'error'
        ? colors.error[600]
        : status === 'success'
          ? colors.success[600]
          : colors.neutral[300];
  const helperColor = status === 'error' ? colors.error[600] : status === 'success' ? colors.success[600] : colors.neutral[500];
  const hasFile = Boolean(fileName);

  return (
    <View style={[fieldStyles.wrapper, style]} testID={testID}>
      <View style={[fieldStyles.frame, { borderColor }]}>
        <HugeiconsIcon icon={icon} size={16} color={disabled ? colors.neutral[300] : colors.neutral[500]} />
        <Text
          numberOfLines={1}
          style={[
            fieldStyles.value,
            {
              color: hasFile ? colors.neutral[900] : colors.neutral[500],
              fontFamily: hasFile ? 'type-weight-bold-700' : 'type-weight-medium-500',
            },
          ]}
        >
          {fileName ?? placeholder}
        </Text>
        <Pressable onPress={disabled ? undefined : onPress} disabled={disabled} testID={testID ? `${testID}-action` : undefined}>
          <Text style={[fieldStyles.value, { color: colors.primary[600], fontFamily: 'type-weight-bold-700', flex: 0 }]}>
            {hasFile ? 'Re-Upload' : 'Upload'}
          </Text>
        </Pressable>
        <FieldLabel label={label} required={required} colors={colors} />
      </View>
      {helperText ? <Text style={[fieldStyles.helper, { color: helperColor }]}>{helperText}</Text> : null}
    </View>
  );
}
