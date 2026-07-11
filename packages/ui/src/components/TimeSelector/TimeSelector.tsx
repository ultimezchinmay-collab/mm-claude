import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

import { darkColors, lightColors, webRadii, webSpacing, webTypography } from '../../tokens';
import { useThemeColors } from '../../theme';

export interface TimeSelectorProps {
  value?: Date | null;
  onChange: (date: Date) => void;
  style?: StyleProp<ViewStyle>;
  testID?: string;
}

type Period = 'AM' | 'PM';
type Colors = typeof lightColors | typeof darkColors;

function get12Hour(date: Date) {
  const h = date.getHours() % 12;
  return h === 0 ? 12 : h;
}

function getPeriod(date: Date): Period {
  return date.getHours() >= 12 ? 'PM' : 'AM';
}

const HOURS = Array.from({ length: 12 }, (_, i) => i + 1);
const MINUTES = Array.from({ length: 60 }, (_, i) => i);

export function TimeSelector({ value, onChange, style, testID }: TimeSelectorProps) {
  const colors = useThemeColors();
  const base = value ?? new Date();
  const hour = get12Hour(base);
  const minute = base.getMinutes();
  const period = getPeriod(base);

  function update(nextHour: number, nextMinute: number, nextPeriod: Period) {
    const hours24 = nextPeriod === 'AM' ? nextHour % 12 : (nextHour % 12) + 12;
    const next = new Date(base);
    next.setHours(hours24, nextMinute, 0, 0);
    onChange(next);
  }

  return (
    <View style={[styles.wrapper, style]} testID={testID}>
      <Column
        items={HOURS}
        selected={hour}
        format={(h) => String(h).padStart(2, '0')}
        onSelect={(h) => update(h, minute, period)}
        colors={colors}
        testID={testID ? `${testID}-hour` : undefined}
      />
      <Text style={[styles.colon, { color: colors.neutral[900] }]}>:</Text>
      <Column
        items={MINUTES}
        selected={minute}
        format={(m) => String(m).padStart(2, '0')}
        onSelect={(m) => update(hour, m, period)}
        colors={colors}
        testID={testID ? `${testID}-minute` : undefined}
      />
      <View style={styles.periodColumn}>
        {(['AM', 'PM'] as const).map((p) => (
          <Pressable
            key={p}
            onPress={() => update(hour, minute, p)}
            style={[styles.periodButton, { borderColor: colors.neutral[100] }, p === period ? { backgroundColor: colors.primary[600] } : null]}
            testID={testID ? `${testID}-${p}` : undefined}
          >
            <Text style={[styles.periodText, { color: p === period ? colors.white[900] : colors.neutral[900] }]}>{p}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

function Column({
  items,
  selected,
  format,
  onSelect,
  colors,
  testID,
}: {
  items: number[];
  selected: number;
  format: (item: number) => string;
  onSelect: (item: number) => void;
  colors: Colors;
  testID?: string;
}) {
  return (
    <ScrollView style={styles.column} showsVerticalScrollIndicator={false}>
      {items.map((item) => {
        const isSelected = item === selected;
        return (
          <Pressable
            key={item}
            onPress={() => onSelect(item)}
            style={[styles.row, isSelected ? { backgroundColor: colors.primary[50] } : null]}
            testID={testID ? `${testID}-${item}` : undefined}
          >
            <Text
              style={[
                styles.rowText,
                {
                  color: isSelected ? colors.primary[600] : colors.neutral[900],
                  fontFamily: isSelected ? 'type-weight-bold-700' : 'type-weight-medium-500',
                },
              ]}
            >
              {format(item)}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: webSpacing['space-8'],
  },
  column: {
    width: 56,
    height: 160,
    borderRadius: webRadii['border-radius-8'],
  },
  colon: {
    fontFamily: 'type-weight-bold-700',
    fontSize: webTypography.fontSize.label,
  },
  row: {
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: webRadii['border-radius-8'],
  },
  rowText: {
    fontSize: webTypography.fontSize.label,
    lineHeight: webTypography.lineHeight['type-lh-label'],
  },
  periodColumn: {
    gap: webSpacing['space-4'],
  },
  periodButton: {
    width: 44,
    height: 32,
    borderWidth: 1,
    borderRadius: webRadii['border-radius-8'],
    alignItems: 'center',
    justifyContent: 'center',
  },
  periodText: {
    fontFamily: 'type-weight-bold-700',
    fontSize: webTypography.fontSize.caption,
    lineHeight: webTypography.lineHeight['type-lh-caption'],
  },
});
