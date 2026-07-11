import { StyleSheet, Text, View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { Delete01Icon, Image01Icon } from '@hugeicons/core-free-icons';

import { webRadii, webSpacing, webTypography } from '../../tokens';
import { useThemeColors } from '../../theme';
import { Button } from '../Button/Button';
import { IconButton } from '../Button/IconButton';

export interface PhotoUploadProps {
  /** Present once a file has been picked — shows the filled/preview state instead of the empty dropzone. */
  hasFile?: boolean;
  /** e.g. "29 Pages" tag overlaid on the preview. */
  pageCount?: number;
  onUploadFile?: () => void;
  onCapturePhoto?: () => void;
  onRemove?: () => void;
  style?: StyleProp<ViewStyle>;
  testID?: string;
}

export function PhotoUpload({
  hasFile,
  pageCount,
  onUploadFile,
  onCapturePhoto,
  onRemove,
  style,
  testID,
}: PhotoUploadProps) {
  const colors = useThemeColors();

  if (hasFile) {
    return (
      <View style={[styles.wrapper, style]} testID={testID}>
        <View style={[styles.preview, { borderColor: colors.primary[600] }]}>
          <View style={[styles.previewImage, { backgroundColor: colors.primary[50] }]} />
          {typeof pageCount === 'number' ? (
            <View style={[styles.tag, { backgroundColor: colors.neutral[100] }]}>
              <Text style={[styles.tagText, { color: colors.neutral[600] }]}>{pageCount} Pages</Text>
            </View>
          ) : null}
        </View>
        <IconButton variant="secondary" icon={<HugeiconsIcon icon={Delete01Icon} size={16} color={colors.neutral[900]} />} onPress={onRemove} testID={testID ? `${testID}-remove` : undefined} />
      </View>
    );
  }

  return (
    <View style={[styles.wrapper, style]} testID={testID}>
      <View style={[styles.dropzone, { backgroundColor: colors.primary[50] }]}>
        <HugeiconsIcon icon={Image01Icon} size={32} color={colors.primary[600]} />
      </View>
      <View style={styles.actions}>
        <Button variant="secondary" label="Upload File" onPress={onUploadFile} style={styles.actionButton} />
        <Button variant="secondary" label="Capture via Camera" onPress={onCapturePhoto} style={styles.actionButton} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    gap: webSpacing['space-16'],
  },
  dropzone: {
    width: 80,
    height: 80,
    borderRadius: webRadii['border-radius-8'],
    alignItems: 'center',
    justifyContent: 'center',
  },
  preview: {
    width: 80,
    height: 80,
    borderRadius: webRadii['border-radius-8'],
    borderWidth: 1,
    overflow: 'hidden',
  },
  previewImage: {
    flex: 1,
  },
  tag: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingHorizontal: webSpacing['space-8'],
    paddingVertical: webSpacing['space-4'],
  },
  tagText: {
    fontFamily: 'type-weight-medium-500',
    fontSize: webTypography.fontSize.caption,
    lineHeight: webTypography.lineHeight['type-lh-caption'],
  },
  actions: {
    flexDirection: 'row',
    gap: webSpacing['space-8'],
    width: '100%',
  },
  actionButton: {
    flex: 1,
    justifyContent: 'center',
  },
});
