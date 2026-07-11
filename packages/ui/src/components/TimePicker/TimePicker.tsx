import type { StyleProp, ViewStyle } from 'react-native';
import { Clock01Icon } from '@hugeicons/core-free-icons';

import { useThemeColors } from '../../theme';
import { PickerTriggerField, type FieldVisualState } from '../fieldShell';

export interface TimePickerProps {
  label: string;
  required?: boolean;
  /** Pre-formatted time string, e.g. "4:30 PM" — formatting/locale is the consumer's responsibility. */
  value: string;
  /** Called on tap — open your own native/web time picker and update `value` from its result. */
  onPress?: () => void;
  placeholder?: string;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  testID?: string;
  previewState?: FieldVisualState;
}

export function TimePicker({ placeholder = 'Select Time', ...props }: TimePickerProps) {
  const colors = useThemeColors();
  return <PickerTriggerField {...props} placeholder={placeholder} icon={Clock01Icon} colors={colors} />;
}
