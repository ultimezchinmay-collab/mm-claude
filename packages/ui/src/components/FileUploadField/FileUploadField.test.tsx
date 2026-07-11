import { fireEvent, render, screen } from '@testing-library/react-native';

import { FileUploadField } from './FileUploadField';

describe('FileUploadField', () => {
  it('shows the placeholder and Upload action when empty', () => {
    render(<FileUploadField label="Label" placeholder="Select Image" />);
    expect(screen.getByText('Select Image')).toBeTruthy();
    expect(screen.getByText('Upload')).toBeTruthy();
  });

  it('shows the file name and Re-Upload action once a file is present', () => {
    render(<FileUploadField label="Label" fileName="QD.jpg" status="success" helperText="Uploaded successfully" />);
    expect(screen.getByText('QD.jpg')).toBeTruthy();
    expect(screen.getByText('Re-Upload')).toBeTruthy();
    expect(screen.getByText('Uploaded successfully')).toBeTruthy();
  });

  it('calls onPress when the action is pressed', () => {
    const onPress = jest.fn();
    render(<FileUploadField label="Label" onPress={onPress} testID="upload" />);
    fireEvent.press(screen.getByTestId('upload-action'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
