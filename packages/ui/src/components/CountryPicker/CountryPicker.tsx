import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { ArrowDown01Icon, GlobeIcon } from '@hugeicons/core-free-icons';

import { webRadii, webSpacing, webTypography } from '../../tokens';
import { useThemeColors } from '../../theme';
import {
  FieldHelperText,
  FieldLabel,
  fieldStyles,
  getFieldBorderColor,
  type FieldVisualState,
} from '../fieldShell';

export interface CountryOption {
  /** e.g. 'India' */
  name: string;
  /** e.g. '+91' */
  dialCode: string;
  /** Emoji flag, e.g. '🇮🇳' — avoids bundling per-country flag image assets. */
  flag: string;
}

export interface CountryPickerProps {
  label: string;
  required?: boolean;
  value: CountryOption | null;
  onChange: (option: CountryOption) => void;
  options: CountryOption[];
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

export function CountryPicker({
  label,
  required,
  value,
  onChange,
  options,
  placeholder = 'Select Country',
  helperText,
  error,
  disabled,
  style,
  testID,
  previewState,
  previewOpen,
}: CountryPickerProps) {
  const colors = useThemeColors();
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const isOpen = previewOpen ?? open;

  const state: FieldVisualState = disabled
    ? 'disabled'
    : error
      ? 'error'
      : (previewState ?? (isOpen ? 'focused' : hovered ? 'hover' : 'default'));

  const borderColor = getFieldBorderColor(state, colors);
  const valueColor = disabled || !value ? colors.neutral[500] : colors.neutral[900];

  return (
    <View style={[fieldStyles.wrapper, isOpen && styles.wrapperOpen, style]} testID={testID}>
      <View
        style={[fieldStyles.frame, { borderColor }]}
        {...(disabled
          ? null
          : { onPointerEnter: () => setHovered(true), onPointerLeave: () => setHovered(false) })}
      >
        {value ? (
          <Text style={styles.flag}>{value.flag}</Text>
        ) : (
          <HugeiconsIcon icon={GlobeIcon} size={16} color={colors.neutral[500]} />
        )}
        <Pressable style={styles.trigger} disabled={disabled} onPress={() => setOpen((prev) => !prev)}>
          <Text
            numberOfLines={1}
            style={[
              fieldStyles.value,
              { color: valueColor, fontFamily: value ? 'type-weight-bold-700' : 'type-weight-medium-500' },
            ]}
          >
            {value ? value.name : placeholder}
          </Text>
        </Pressable>
        <HugeiconsIcon icon={ArrowDown01Icon} size={16} color={colors.neutral[500]} />
        <FieldLabel label={label} required={required} colors={colors} />

        {isOpen ? (
          <View style={[styles.panel, { borderColor: colors.neutral[100], backgroundColor: colors.white[900] }]}>
            <ScrollView style={styles.panelScroll}>
              {options.map((option) => {
                const isSelected = option.name === value?.name;
                return (
                  <Pressable
                    key={option.name}
                    style={styles.option}
                    onPress={() => {
                      onChange(option);
                      setOpen(false);
                    }}
                  >
                    <Text style={styles.flag}>{option.flag}</Text>
                    <Text style={[styles.optionText, { color: isSelected ? colors.primary[600] : colors.neutral[600] }]}>
                      {option.name}
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
  flag: {
    fontSize: 16,
  },
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
    flexDirection: 'row',
    alignItems: 'center',
    gap: webSpacing['space-8'],
    paddingVertical: webSpacing['space-4'],
  },
  optionText: {
    fontFamily: 'type-weight-medium-500',
    fontSize: webTypography.fontSize.label,
    lineHeight: webTypography.lineHeight['type-lh-label'],
  },
});
