import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { ArrowLeft01Icon, ArrowRight01Icon } from '@hugeicons/core-free-icons';

import { webRadii, webSpacing, webTypography } from '../../tokens';
import { useThemeColors } from '../../theme';

export interface CalendarProps {
  value?: Date | null;
  onChange: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  style?: StyleProp<ViewStyle>;
  testID?: string;
}

const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

/** Local-date key for testIDs — avoids toISOString()'s UTC conversion shifting the day. */
function dateKey(date: Date) {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
}

interface Cell {
  date: Date;
  outsideMonth: boolean;
}

function buildMonthGrid(year: number, month: number): Cell[] {
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const cells: Cell[] = [];
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    cells.push({ date: new Date(year, month - 1, daysInPrevMonth - i), outsideMonth: true });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ date: new Date(year, month, d), outsideMonth: false });
  }
  while (cells.length % 7 !== 0 || cells.length < 42) {
    const last = cells[cells.length - 1].date;
    cells.push({ date: new Date(last.getFullYear(), last.getMonth(), last.getDate() + 1), outsideMonth: true });
  }
  return cells;
}

export function Calendar({ value, onChange, minDate, maxDate, style, testID }: CalendarProps) {
  const colors = useThemeColors();
  const [viewDate, setViewDate] = useState(value ?? new Date());
  const today = new Date();

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const monthLabel = viewDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  const cells = buildMonthGrid(year, month);

  function isDisabled(date: Date) {
    if (minDate && date < startOfDay(minDate)) return true;
    if (maxDate && date > startOfDay(maxDate)) return true;
    return false;
  }

  return (
    <View style={[styles.wrapper, style]} testID={testID}>
      <View style={styles.header}>
        <Pressable onPress={() => setViewDate(new Date(year, month - 1, 1))} testID={testID ? `${testID}-prev` : undefined}>
          <HugeiconsIcon icon={ArrowLeft01Icon} size={16} color={colors.neutral[600]} />
        </Pressable>
        <Text style={[styles.monthLabel, { color: colors.neutral[900] }]}>{monthLabel}</Text>
        <Pressable onPress={() => setViewDate(new Date(year, month + 1, 1))} testID={testID ? `${testID}-next` : undefined}>
          <HugeiconsIcon icon={ArrowRight01Icon} size={16} color={colors.neutral[600]} />
        </Pressable>
      </View>

      <View style={styles.weekdays}>
        {WEEKDAYS.map((day, index) => (
          <Text key={`${day}-${index}`} style={[styles.weekday, { color: colors.neutral[500] }]}>
            {day}
          </Text>
        ))}
      </View>

      <View style={styles.grid}>
        {cells.map((cell, index) => {
          const selected = value ? isSameDay(cell.date, value) : false;
          const isToday = isSameDay(cell.date, today);
          const disabled = isDisabled(cell.date);
          return (
            <Pressable
              key={index}
              disabled={disabled}
              onPress={() => onChange(cell.date)}
              style={[
                styles.cell,
                selected ? { backgroundColor: colors.primary[600] } : null,
                !selected && isToday ? { borderWidth: 1, borderColor: colors.primary[600] } : null,
              ]}
              testID={testID ? `${testID}-day-${dateKey(cell.date)}` : undefined}
            >
              <Text
                style={[
                  styles.cellText,
                  {
                    color: selected
                      ? colors.white[900]
                      : disabled
                        ? colors.neutral[300]
                        : cell.outsideMonth
                          ? colors.neutral[300]
                          : colors.neutral[900],
                  },
                ]}
              >
                {cell.date.getDate()}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 280,
    gap: webSpacing['space-8'],
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  monthLabel: {
    fontFamily: 'type-weight-bold-700',
    fontSize: webTypography.fontSize.label,
    lineHeight: webTypography.lineHeight['type-lh-label'],
  },
  weekdays: {
    flexDirection: 'row',
  },
  weekday: {
    width: 40,
    textAlign: 'center',
    fontFamily: 'type-weight-medium-500',
    fontSize: webTypography.fontSize.caption,
    lineHeight: webTypography.lineHeight['type-lh-caption'],
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cell: {
    width: 40,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: webRadii['border-radius-8'],
  },
  cellText: {
    fontFamily: 'type-weight-medium-500',
    fontSize: webTypography.fontSize.label,
    lineHeight: webTypography.lineHeight['type-lh-label'],
  },
});
