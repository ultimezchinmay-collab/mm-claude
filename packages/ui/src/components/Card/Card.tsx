import { Card as PaperCard } from 'react-native-paper';
import type { StyleProp, ViewStyle } from 'react-native';

export interface CardProps {
  title: string;
  subtitle?: string;
  variant?: 'elevated' | 'outlined' | 'filled';
  onPress?: () => void;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  testID?: string;
}

const VARIANT_TO_MODE: Record<NonNullable<CardProps['variant']>, 'elevated' | 'outlined' | 'contained'> = {
  elevated: 'elevated',
  outlined: 'outlined',
  filled: 'contained',
};

export function Card({ title, subtitle, variant = 'elevated', onPress, children, style, testID }: CardProps) {
  return (
    <PaperCard mode={VARIANT_TO_MODE[variant]} onPress={onPress} style={style} testID={testID}>
      <PaperCard.Title title={title} subtitle={subtitle} />
      {children ? <PaperCard.Content>{children}</PaperCard.Content> : null}
    </PaperCard>
  );
}
