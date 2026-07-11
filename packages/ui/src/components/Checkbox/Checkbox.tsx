import { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { Tick01Icon } from '@hugeicons/core-free-icons';

import { webRadii } from '../../tokens';
import { useThemeColors } from '../../theme';

export interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  testID?: string;
  /** Storybook/docs only — forces a visual state without real hover interaction. */
  previewState?: 'default' | 'hover';
}

export function Checkbox({ checked, onChange, disabled, style, testID, previewState }: CheckboxProps) {
  const colors = useThemeColors();
  const [hovered, setHovered] = useState(false);

  const isHovered = previewState === 'hover' || (hovered && !previewState);
  const borderColor = checked
    ? colors.primary[600]
    : disabled
      ? colors.neutral[100]
      : isHovered
        ? colors.neutral[500]
        : colors.neutral[300];

  return (
    <Pressable
      onPress={disabled ? undefined : () => onChange?.(!checked)}
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      disabled={disabled}
      testID={testID}
      style={[
        styles.box,
        { borderColor, backgroundColor: checked ? colors.primary[600] : 'transparent' },
        disabled ? styles.disabled : null,
        style,
      ]}
    >
      {checked ? <HugeiconsIcon icon={Tick01Icon} size={12} color={colors.white[900]} /> : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 20,
    height: 20,
    borderRadius: webRadii['border-radius-8'],
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
});
