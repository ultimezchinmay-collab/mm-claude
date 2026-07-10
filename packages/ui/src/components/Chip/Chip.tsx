import { Chip as PaperChip } from 'react-native-paper';
import type { StyleProp, ViewStyle } from 'react-native';

export interface ChipProps {
  label: string;
  selected?: boolean;
  disabled?: boolean;
  icon?: string;
  onPress?: () => void;
  onClose?: () => void;
  style?: StyleProp<ViewStyle>;
  testID?: string;
}

export function Chip({ label, selected, disabled, icon, onPress, onClose, style, testID }: ChipProps) {
  return (
    <PaperChip
      mode={selected ? 'flat' : 'outlined'}
      selected={selected}
      disabled={disabled}
      icon={icon}
      onPress={onPress}
      onClose={onClose}
      style={[{ alignSelf: 'flex-start' }, style]}
      testID={testID}
    >
      {label}
    </PaperChip>
  );
}
