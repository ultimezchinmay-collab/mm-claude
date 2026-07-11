import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

import { webSpacing, webTypography } from '../../tokens';
import { useThemeColors } from '../../theme';
import { Radio } from './Radio';

export interface RadioOption {
  label: string;
  value: string;
}

export interface RadioGroupProps {
  options: RadioOption[];
  value: string | null;
  onChange: (value: string) => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  testID?: string;
}

export function RadioGroup({ options, value, onChange, disabled, style, testID }: RadioGroupProps) {
  const colors = useThemeColors();

  return (
    <View style={[styles.group, style]} testID={testID}>
      {options.map((option) => (
        <Pressable
          key={option.value}
          style={styles.row}
          disabled={disabled}
          onPress={() => onChange(option.value)}
          testID={testID ? `${testID}-${option.value}` : undefined}
        >
          <Text style={[styles.label, { color: colors.neutral[900] }]}>{option.label}</Text>
          <Radio selected={value === option.value} disabled={disabled} />
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  group: {
    gap: webSpacing['space-8'],
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: webSpacing['space-4'],
  },
  label: {
    fontFamily: 'type-weight-medium-500',
    fontSize: webTypography.fontSize.label,
    lineHeight: webTypography.lineHeight['type-lh-label'],
  },
});
