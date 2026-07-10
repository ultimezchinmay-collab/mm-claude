import { Text as PaperText } from 'react-native-paper';
import type { StyleProp, TextStyle } from 'react-native';

import type { TypeScaleKey } from '../../tokens';

export interface TypographyProps {
  variant?: TypeScaleKey;
  color?: string;
  children: React.ReactNode;
  numberOfLines?: number;
  style?: StyleProp<TextStyle>;
  testID?: string;
}

export function Typography({
  variant = 'bodyMedium',
  color,
  children,
  numberOfLines,
  style,
  testID,
}: TypographyProps) {
  return (
    <PaperText
      variant={variant}
      style={[color ? { color } : null, style]}
      numberOfLines={numberOfLines}
      testID={testID}
    >
      {children}
    </PaperText>
  );
}
