import { fireEvent, render, screen } from '@testing-library/react-native';

import { MultiImageUpload } from './MultiImageUpload';

describe('MultiImageUpload', () => {
  it('renders the counter and one thumbnail per image', () => {
    render(<MultiImageUpload count={3} maxImages={5} testID="gallery" />);
    expect(screen.getByText('03/05')).toBeTruthy();
    expect(screen.getByTestId('gallery-remove-0')).toBeTruthy();
    expect(screen.getByTestId('gallery-remove-2')).toBeTruthy();
  });

  it('calls onRemoveImage with the pressed index', () => {
    const onRemoveImage = jest.fn();
    render(<MultiImageUpload count={2} onRemoveImage={onRemoveImage} testID="gallery" />);
    fireEvent.press(screen.getByTestId('gallery-remove-1'));
    expect(onRemoveImage).toHaveBeenCalledWith(1);
  });

  it('disables Add Image once maxImages is reached', () => {
    const onAddImage = jest.fn();
    render(<MultiImageUpload count={5} maxImages={5} onAddImage={onAddImage} />);
    fireEvent.press(screen.getByText('Add Image'));
    expect(onAddImage).not.toHaveBeenCalled();
  });
});
