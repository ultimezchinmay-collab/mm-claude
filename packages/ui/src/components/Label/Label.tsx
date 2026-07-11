import { StyleSheet, Text, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

import { webRadii, webSpacing, webTypography } from '../../tokens';
import { useThemeColors } from '../../theme';
import { getStatusFamily, type TagStatus } from '../statusColors';

export interface LabelProps {
  label: string;
  status?: TagStatus;
  style?: StyleProp<ViewStyle>;
  testID?: string;
}

/** Solid status pill — higher emphasis than Badge, e.g. flagging a required action. */
export function Label({ label, status = 'neutral', style, testID }: LabelProps) {
  const colors = useThemeColors();
  const family = getStatusFamily(status, colors);

  return (
    <View style={[styles.frame, { backgroundColor: family[600] }, style]} testID={testID}>
      <Text style={[styles.label, { color: colors.white[900] }]}>{label}</Text>
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
