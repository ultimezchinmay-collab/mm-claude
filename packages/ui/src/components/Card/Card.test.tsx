import { render, screen } from '@testing-library/react-native';

import { Card, type CardProps } from './Card';

const cardVariants: NonNullable<CardProps['variant']>[] = ['elevated', 'outlined', 'filled'];

describe('Card', () => {
  it('renders its title', () => {
    render(<Card title="Appointment" subtitle="Today at 4pm" />);
    expect(screen.getByText('Appointment')).toBeTruthy();
    expect(screen.getByText('Today at 4pm')).toBeTruthy();
  });

  it.each(cardVariants)('renders the %s variant without throwing', (variant) => {
    render(<Card title="Appointment" variant={variant} />);
    expect(screen.getByText('Appointment')).toBeTruthy();
  });
});
