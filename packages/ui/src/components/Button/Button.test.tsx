import { render, screen } from '@testing-library/react-native';

import { Button, type ButtonVariant } from './Button';
import { IconButton, type IconButtonVariant } from './IconButton';

const buttonVariants: ButtonVariant[] = ['primary', 'secondary', 'text-link'];
const iconButtonVariants: IconButtonVariant[] = ['primary', 'secondary', 'back'];

describe('Button', () => {
  it('renders its label', () => {
    render(<Button label="Continue" onPress={() => {}} />);
    expect(screen.getByText('Continue')).toBeTruthy();
  });

  it.each(buttonVariants)('renders the %s variant without throwing', (variant) => {
    render(<Button label="Continue" variant={variant} onPress={() => {}} />);
    expect(screen.getByText('Continue')).toBeTruthy();
  });
});

describe('IconButton', () => {
  it.each(iconButtonVariants)('renders the %s variant without throwing', (variant) => {
    const { toJSON } = render(<IconButton variant={variant} icon={null} onPress={() => {}} testID="icon-button" />);
    expect(toJSON()).toBeTruthy();
  });
});
