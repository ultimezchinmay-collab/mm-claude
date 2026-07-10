import { Text, View } from 'react-native';

export function VariablesUsed({ vars }: { vars: string[] }) {
  return (
    <View style={{ marginTop: 6, marginBottom: 20 }}>
      {vars.map((name) => (
        <Text key={name} style={{ fontSize: 11, fontFamily: 'monospace', opacity: 0.6 }}>
          {name}
        </Text>
      ))}
    </View>
  );
}

export function Example({ children, vars }: { children: React.ReactNode; vars: string[] }) {
  return (
    <View style={{ marginBottom: 8 }}>
      {children}
      <VariablesUsed vars={vars} />
    </View>
  );
}

export const LAYOUT_VARS = ['--space-16', '--space-12', '--space-8', '--border-radius-8'];
export const LABEL_TYPE_VARS = ['--type-family-primary', '--type-weight-bold-700', '--label', '--type-lh-label'];
