import { render, screen } from '@testing-library/react-native';

import { Badge } from './Badge';

describe('Badge', () => {
  it('renders its label', () => {
    render(<Badge label="Neutral" />);
    expect(screen.getByText('Neutral')).toBeTruthy();
  });

  it('renders every status without throwing', () => {
    (['neutral', 'info', 'success', 'warning', 'error'] as const).forEach((status) => {
      render(<Badge label={status} status={status} />);
    });
    expect(screen.getAllByText(/neutral|info|success|warning|error/i).length).toBeGreaterThan(0);
  });
});
