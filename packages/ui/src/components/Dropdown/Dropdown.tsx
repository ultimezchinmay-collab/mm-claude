import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { ArrowDown01Icon } from '@hugeicons/core-free-icons';

import { webRadii, webSpacing, webTypography } from '../../tokens';
import { useThemeColors } from '../../theme';
import {
  FieldHelperText,
  FieldLabel,
  fieldStyles,
  getFieldBorderColor,
  type FieldVisualState,
} from '../fieldShell';

export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps {
  label: string;
  required?: boolean;
  value: string | null;
  onChange: (value: string) => void;
  options: DropdownOption[];
  placeholder?: string;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  testID?: string;
  /** Storybook/docs only — forces the border's visual state without real hover/focus interaction. */
  previewState?: 'default' | 'hover' | 'focused';
  /** Storybook/docs only — renders the options panel open without real interaction. */
  previewOpen?: boolean;
}

export function Dropdown({
  label,
  required,
  value,
  onChange,
  options,
  placeholder = 'Select here',
  helperText,
  error,
  disabled,
  style,
  testID,
  previewState,
  previewOpen,
}: DropdownProps) {
  const colors = useThemeColors();
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const isOpen = previewOpen ?? open;
  const selected = options.find((option) => option.value === value);
  const hasValue = Boolean(selected);

  const state: FieldVisualState = disabled
    ? 'disabled'
    : error
      ? 'error'
      : (previewState ?? (isOpen ? 'focused' : hovered ? 'hover' : 'default'));

  const borderColor = getFieldBorderColor(state, colors);
  const valueColor = disabled || !hasValue ? colors.neutral[500] : colors.neutral[900];

  return (
    <View style={[fieldStyles.wrapper, isOpen && styles.wrapperOpen, style]} testID={testID}>
      <View
        style={[fieldStyles.frame, { borderColor }]}
        {...(disabled
          ? null
          : { onPointerEnter: () => setHovered(true), onPointerLeave: () => setHovered(false) })}
      >
        <Pressable style={styles.trigger} disabled={disabled} onPress={() => setOpen((prev) => !prev)}>
          <Text
            numberOfLines={1}
            style={[
              fieldStyles.value,
              { color: valueColor, fontFamily: hasValue ? 'type-weight-bold-700' : 'type-weight-medium-500' },
            ]}
          >
            {selected ? selected.label : placeholder}
          </Text>
        </Pressable>
        <HugeiconsIcon icon={ArrowDown01Icon} size={16} color={colors.neutral[500]} />
        <FieldLabel label={label} required={required} colors={colors} />

        {isOpen ? (
          <View style={[styles.panel, { borderColor: colors.neutral[100], backgroundColor: colors.white[900] }]}>
            <ScrollView style={styles.panelScroll}>
              {options.map((option) => {
                const isSelected = option.value === value;
                return (
                  <Pressable
                    key={option.value}
                    style={styles.option}
                    onPress={() => {
                      onChange(option.value);
                      setOpen(false);
                    }}
                  >
                    <Text style={[styles.optionText, { color: isSelected ? colors.primary[600] : colors.neutral[600] }]}>
                      {option.label}
                    </Text>
                  </Pressable>
                );
              })}
            </ScrollView>
          </View>
        ) : null}
      </View>
      <FieldHelperText text={error ?? helperText} error={Boolean(error)} colors={colors} />
    </View>
  );
}

const styles = StyleSheet.create({
  trigger: {
    flex: 1,
  },
  // Raises this field above later siblings so the absolutely-positioned options
  // panel isn't painted underneath the next block's own stacking context (RNW
  // gives every View position:relative + z-index:0 by default, so a z-index deep
  // inside a plain sibling can't otherwise "win" against DOM-later content).
  wrapperOpen: {
    position: 'relative',
    zIndex: 20,
  },
  panel: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    marginTop: webSpacing['space-4'],
    borderWidth: 1,
    borderRadius: webRadii['border-radius-8'],
    padding: webSpacing['space-12'],
    zIndex: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 5 },
  },
  panelScroll: {
    maxHeight: 220,
  },
  option: {
    paddingVertical: webSpacing['space-4'],
  },
  optionText: {
    fontFamily: 'type-weight-medium-500',
    fontSize: webTypography.fontSize.label,
    lineHeight: webTypography.lineHeight['type-lh-label'],
  },
});
