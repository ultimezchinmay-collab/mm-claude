import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { Delete01Icon } from '@hugeicons/core-free-icons';

import { webRadii, webSpacing, webTypography } from '../../tokens';
import { useThemeColors } from '../../theme';
import { Button } from '../Button/Button';

export interface MultiImageUploadProps {
  /** Number of images already added — rendered as that many placeholder thumbnails. */
  count: number;
  maxImages?: number;
  onAddImage?: () => void;
  onRemoveImage?: (index: number) => void;
  style?: StyleProp<ViewStyle>;
  testID?: string;
}

export function MultiImageUpload({
  count,
  maxImages = 5,
  onAddImage,
  onRemoveImage,
  style,
  testID,
}: MultiImageUploadProps) {
  const colors = useThemeColors();

  return (
    <View style={[styles.wrapper, style]} testID={testID}>
      <View style={styles.row}>
        {Array.from({ length: count }).map((_, index) => (
          <View
            key={index}
            style={[
              styles.thumb,
              { borderColor: index === 0 ? colors.primary[600] : colors.neutral[50], backgroundColor: colors.neutral[50] },
            ]}
          >
            <Pressable
              style={[styles.deleteButton, { backgroundColor: colors.error[600] }]}
              onPress={() => onRemoveImage?.(index)}
              testID={testID ? `${testID}-remove-${index}` : undefined}
            >
              <HugeiconsIcon icon={Delete01Icon} size={16} color={colors.white[900]} />
            </Pressable>
          </View>
        ))}
      </View>
      <View style={styles.footer}>
        <Text style={[styles.counter, { color: colors.neutral[900] }]}>
          {String(count).padStart(2, '0')}/{String(maxImages).padStart(2, '0')}
        </Text>
        <Button variant="secondary" label="Add Image" onPress={onAddImage} disabled={count >= maxImages} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: webSpacing['space-16'],
  },
  row: {
    flexDirection: 'row',
    gap: webSpacing['space-4'],
  },
  thumb: {
    width: 56,
    height: 80,
    borderRadius: webRadii['border-radius-8'],
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: webSpacing['space-8'],
  },
  deleteButton: {
    width: 24,
    height: 24,
    borderRadius: webRadii['border-radius-8'],
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  counter: {
    fontFamily: 'type-weight-medium-500',
    fontSize: webTypography.fontSize.label,
    lineHeight: webTypography.lineHeight['type-lh-label'],
  },
});
