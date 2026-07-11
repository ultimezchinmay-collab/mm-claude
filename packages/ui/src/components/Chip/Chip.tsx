import { Pressable, StyleSheet, Text } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { Cancel01Icon } from '@hugeicons/core-free-icons';

import { webRadii, webSpacing, webTypography } from '../../tokens';
import { useThemeColors } from '../../theme';

export interface ChipProps {
  label: string;
  selected?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  /** Shows a close icon when `selected` — called when it's pressed. */
  onClose?: () => void;
  style?: StyleProp<ViewStyle>;
  testID?: string;
}

export function Chip({ label, selected, disabled, onPress, onClose, style, testID }: ChipProps) {
  const colors = useThemeColors();

  const borderColor = selected ? colors.primary[500] : colors.neutral[100];
  const backgroundColor = selected ? colors.primary[50] : 'transparent';

  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
      testID={testID}
      style={[styles.frame, { borderColor, backgroundColor }, disabled ? styles.disabled : null, style]}
    >
      <Text style={[styles.label, { color: colors.neutral[900] }]}>{label}</Text>
      {selected ? (
        <Pressable
          onPress={disabled ? undefined : onClose}
          disabled={disabled}
          testID={testID ? `${testID}-close` : undefined}
        >
          <HugeiconsIcon icon={Cancel01Icon} size={12} color={colors.primary[600]} />
        </Pressable>
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  frame: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: webSpacing['space-8'],
    borderWidth: 1,
    borderRadius: webRadii['border-radius-8'],
    paddingHorizontal: webSpacing['space-12'],
    paddingVertical: webSpacing['space-8'],
  },
  label: {
    fontFamily: 'type-weight-medium-500',
    fontSize: webTypography.fontSize.label,
    lineHeight: webTypography.lineHeight['type-lh-label'],
  },
  disabled: {
    opacity: 0.5,
  },
});
