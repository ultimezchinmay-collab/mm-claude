import { HelperText, TextInput as PaperTextInput } from 'react-native-paper';
import type { StyleProp, ViewStyle } from 'react-native';

export interface TextFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  secureTextEntry?: boolean;
  multiline?: boolean;
  style?: StyleProp<ViewStyle>;
  testID?: string;
}

export function TextField({
  label,
  value,
  onChangeText,
  placeholder,
  error,
  disabled,
  secureTextEntry,
  multiline,
  style,
  testID,
}: TextFieldProps) {
  return (
    <>
      <PaperTextInput
        mode="outlined"
        label={label}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        error={Boolean(error)}
        disabled={disabled}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        style={style}
        testID={testID}
      />
      {error ? <HelperText type="error">{error}</HelperText> : null}
    </>
  );
}
