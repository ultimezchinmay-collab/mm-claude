import { useState } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { Clock01Icon } from '@hugeicons/core-free-icons';

import { useThemeColors } from '../../theme';
import { PickerTriggerField, type FieldVisualState } from '../fieldShell';
import { TimeSelector } from '../TimeSelector/TimeSelector';

export interface TimePickerProps {
  label: string;
  required?: boolean;
  value: Date | null;
  onChange: (date: Date) => void;
  placeholder?: string;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  testID?: string;
  previewState?: FieldVisualState;
  /** Storybook/docs only — renders the time selector panel open without real interaction. */
  previewOpen?: boolean;
}

function formatTime(date: Date) {
  let hours = date.getHours() % 12;
  if (hours === 0) hours = 12;
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const period = date.getHours() >= 12 ? 'PM' : 'AM';
  return `${hours}:${minutes} ${period}`;
}

export function TimePicker({
  placeholder = 'Select Time',
  value,
  onChange,
  previewOpen,
  testID,
  ...props
}: TimePickerProps) {
  const colors = useThemeColors();
  const [open, setOpen] = useState(false);
  const isOpen = previewOpen ?? open;

  return (
    <PickerTriggerField
      {...props}
      testID={testID}
      value={value ? formatTime(value) : ''}
      placeholder={placeholder}
      icon={Clock01Icon}
      colors={colors}
      onPress={() => setOpen((prev) => !prev)}
      open={isOpen}
      panel={
        <TimeSelector
          value={value}
          onChange={onChange}
          testID={testID ? `${testID}-time` : undefined}
        />
      }
    />
  );
}
