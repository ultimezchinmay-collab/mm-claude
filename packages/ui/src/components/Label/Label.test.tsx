import { render, screen } from '@testing-library/react-native';

import { Label } from './Label';

describe('Label', () => {
  it('renders its label', () => {
    render(<Label label="Neutral" />);
    expect(screen.getByText('Neutral')).toBeTruthy();
  });

  it('renders every status without throwing', () => {
    (['neutral', 'info', 'success', 'warning', 'error'] as const).forEach((status) => {
      render(<Label label={status} status={status} />);
    });
    expect(screen.getAllByText(/neutral|info|success|warning|error/i).length).toBeGreaterThan(0);
  });
});
