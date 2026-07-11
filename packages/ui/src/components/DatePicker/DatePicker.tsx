import { useState } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { Calendar04Icon } from '@hugeicons/core-free-icons';

import { useThemeColors } from '../../theme';
import { PickerTriggerField, type FieldVisualState } from '../fieldShell';
import { Calendar } from '../Calendar/Calendar';

export interface DatePickerProps {
  label: string;
  required?: boolean;
  value: Date | null;
  onChange: (date: Date) => void;
  placeholder?: string;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  minDate?: Date;
  maxDate?: Date;
  style?: StyleProp<ViewStyle>;
  testID?: string;
  previewState?: FieldVisualState;
  /** Storybook/docs only — renders the calendar panel open without real interaction. */
  previewOpen?: boolean;
}

function formatDate(date: Date) {
  const day = date.getDate();
  const month = date.toLocaleDateString('en-US', { month: 'short' });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

export function DatePicker({
  placeholder = 'Select Date',
  value,
  onChange,
  minDate,
  maxDate,
  previewOpen,
  testID,
  ...props
}: DatePickerProps) {
  const colors = useThemeColors();
  const [open, setOpen] = useState(false);
  const isOpen = previewOpen ?? open;

  return (
    <PickerTriggerField
      {...props}
      testID={testID}
      value={value ? formatDate(value) : ''}
      placeholder={placeholder}
      icon={Calendar04Icon}
      colors={colors}
      onPress={() => setOpen((prev) => !prev)}
      open={isOpen}
      panel={
        <Calendar
          value={value}
          minDate={minDate}
          maxDate={maxDate}
          onChange={(date) => {
            onChange(date);
            setOpen(false);
          }}
          testID={testID ? `${testID}-calendar` : undefined}
        />
      }
    />
  );
}
