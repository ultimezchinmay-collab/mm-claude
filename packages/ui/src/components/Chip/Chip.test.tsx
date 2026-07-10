import { render, screen } from '@testing-library/react-native';

import { Chip } from './Chip';

describe('Chip', () => {
  it('renders its label', () => {
    render(<Chip label="Cardiology" />);
    expect(screen.getByText('Cardiology')).toBeTruthy();
  });

  it('renders selected and disabled states without throwing', () => {
    render(<Chip label="Cardiology" selected disabled />);
    expect(screen.getByText('Cardiology')).toBeTruthy();
  });
});
