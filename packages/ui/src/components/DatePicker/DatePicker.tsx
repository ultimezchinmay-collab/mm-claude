import { useColorScheme } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import { Calendar04Icon } from '@hugeicons/core-free-icons';

import { darkColors, lightColors } from '../../tokens';
import { PickerTriggerField, type FieldVisualState } from '../fieldShell';

export interface DatePickerProps {
  label: string;
  required?: boolean;
  /** Pre-formatted date string, e.g. "12 Jan 2026" — formatting/locale is the consumer's responsibility. */
  value: string;
  /** Called on tap — open your own native/web date picker and update `value` from its result. */
  onPress?: () => void;
  placeholder?: string;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  testID?: string;
  previewState?: FieldVisualState;
}

export function DatePicker({ placeholder = 'Select Date', ...props }: DatePickerProps) {
  const scheme = useColorScheme();
  const colors = scheme === 'dark' ? darkColors : lightColors;
  return <PickerTriggerField {...props} placeholder={placeholder} icon={Calendar04Icon} colors={colors} />;
}
