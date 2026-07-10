import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, useColorScheme } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { ArrowDown01Icon, Cancel01Icon, Tick01Icon } from '@hugeicons/core-free-icons';

import { darkColors, lightColors, webRadii, webSpacing, webTypography } from '../../tokens';
import {
  FieldHelperText,
  FieldLabel,
  fieldStyles,
  getFieldBorderColor,
  type FieldVisualState,
} from '../fieldShell';

export interface MultiSelectOption {
  label: string;
  value: string;
}

export interface MultiSelectDropdownProps {
  label: string;
  required?: boolean;
  value: string[];
  onChange: (value: string[]) => void;
  options: MultiSelectOption[];
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

export function MultiSelectDropdown({
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
}: MultiSelectDropdownProps) {
  const scheme = useColorScheme();
  const colors = scheme === 'dark' ? darkColors : lightColors;
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const isOpen = previewOpen ?? open;
  const selectedOptions = options.filter((option) => value.includes(option.value));
  const hasValue = selectedOptions.length > 0;

  const state: FieldVisualState = disabled
    ? 'disabled'
    : error
      ? 'error'
      : (previewState ?? (isOpen ? 'focused' : hovered ? 'hover' : 'default'));

  const borderColor = getFieldBorderColor(state, colors);

  function toggle(optionValue: string) {
    if (value.includes(optionValue)) {
      onChange(value.filter((v) => v !== optionValue));
    } else {
      onChange([...value, optionValue]);
    }
  }

  return (
    <View style={[fieldStyles.wrapper, isOpen && styles.wrapperOpen, style]} testID={testID}>
      <View
        style={[fieldStyles.frame, styles.frame, { borderColor }]}
        {...(disabled
          ? null
          : { onPointerEnter: () => setHovered(true), onPointerLeave: () => setHovered(false) })}
      >
        <Pressable style={styles.triggerRow} disabled={disabled} onPress={() => setOpen((prev) => !prev)}>
          {hasValue ? (
            <View style={styles.chipsWrap}>
              {selectedOptions.map((option) => (
                <View
                  key={option.value}
                  style={[styles.chip, { backgroundColor: colors.primary[50], borderColor: colors.primary[500] }]}
                >
                  <Text style={[styles.chipText, { color: colors.neutral[900] }]}>{option.label}</Text>
                  <Pressable onPress={() => toggle(option.value)} disabled={disabled}>
                    <HugeiconsIcon icon={Cancel01Icon} size={12} color={colors.primary[600]} />
                  </Pressable>
                </View>
              ))}
            </View>
          ) : (
            <Text style={[fieldStyles.value, { color: colors.neutral[500], fontFamily: 'type-weight-medium-500' }]}>
              {placeholder}
            </Text>
          )}
          <HugeiconsIcon icon={ArrowDown01Icon} size={16} color={colors.neutral[500]} />
        </Pressable>
        <FieldLabel label={label} required={required} colors={colors} />

        {isOpen ? (
          <View style={[styles.panel, { borderColor: colors.neutral[100], backgroundColor: colors.white[900] }]}>
            <ScrollView style={styles.panelScroll}>
              {options.map((option) => {
                const isSelected = value.includes(option.value);
                return (
                  <Pressable key={option.value} style={styles.option} onPress={() => toggle(option.value)}>
                    <Text style={[styles.optionText, { color: colors.neutral[600] }]}>{option.label}</Text>
                    <View
                      style={[
                        styles.checkbox,
                        {
                          borderColor: isSelected ? colors.primary[600] : colors.neutral[300],
                          backgroundColor: isSelected ? colors.primary[600] : 'transparent',
                        },
                      ]}
                    >
                      {isSelected ? <HugeiconsIcon icon={Tick01Icon} size={12} color={colors.buttonTextIconLight} /> : null}
                    </View>
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
  frame: {
    alignItems: 'flex-start',
  },
  // See Dropdown.tsx's wrapperOpen for why this is needed on web.
  wrapperOpen: {
    position: 'relative',
    zIndex: 20,
  },
  triggerRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: webSpacing['space-8'],
  },
  chipsWrap: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: webSpacing['space-8'],
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: webSpacing['space-8'],
    borderWidth: 1,
    borderRadius: webRadii['border-radius-8'],
    paddingHorizontal: webSpacing['space-8'],
    paddingVertical: webSpacing['space-4'],
  },
  chipText: {
    fontFamily: 'type-weight-medium-500',
    fontSize: webTypography.fontSize.label,
    lineHeight: webTypography.lineHeight['type-lh-label'],
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: webSpacing['space-4'],
  },
  optionText: {
    fontFamily: 'type-weight-medium-500',
    fontSize: webTypography.fontSize.label,
    lineHeight: webTypography.lineHeight['type-lh-label'],
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: webRadii['border-radius-8'],
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
