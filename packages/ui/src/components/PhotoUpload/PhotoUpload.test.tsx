import { fireEvent, render, screen } from '@testing-library/react-native';

import { PhotoUpload } from './PhotoUpload';

describe('PhotoUpload', () => {
  it('shows Upload File / Capture via Camera actions when empty', () => {
    render(<PhotoUpload />);
    expect(screen.getByText('Upload File')).toBeTruthy();
    expect(screen.getByText('Capture via Camera')).toBeTruthy();
  });

  it('shows the preview and remove button once a file is present', () => {
    const onRemove = jest.fn();
    render(<PhotoUpload hasFile pageCount={29} onRemove={onRemove} testID="photo" />);
    expect(screen.getByText('29 Pages')).toBeTruthy();
    fireEvent.press(screen.getByTestId('photo-remove'));
    expect(onRemove).toHaveBeenCalledTimes(1);
  });
});
