import { StyleSheet, Text, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

import { webRadii, webSpacing, webTypography } from '../../tokens';
import { useThemeColors } from '../../theme';
import { getStatusFamily, type TagStatus } from '../statusColors';

export interface BadgeProps {
  label: string;
  status?: TagStatus;
  style?: StyleProp<ViewStyle>;
  testID?: string;
}

/** Soft/tint status pill — e.g. a count or state indicator that isn't the primary focus. */
export function Badge({ label, status = 'neutral', style, testID }: BadgeProps) {
  const colors = useThemeColors();
  const family = getStatusFamily(status, colors);

  return (
    <View style={[styles.frame, { backgroundColor: family[50] }, style]} testID={testID}>
      <Text style={[styles.label, { color: family[600] }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    alignSelf: 'flex-start',
    borderRadius: webRadii['border-radius-8'],
    paddingHorizontal: webSpacing['space-8'],
    paddingVertical: webSpacing['space-4'],
  },
  label: {
    fontFamily: 'type-weight-medium-500',
    fontSize: webTypography.fontSize.caption,
    lineHeight: webTypography.lineHeight['type-lh-caption'],
  },
});
