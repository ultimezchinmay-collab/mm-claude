import { Text, View } from 'react-native';

export interface ElementVariables {
  /** The visual part these variables apply to, e.g. "Label text", "Border", "Icon". */
  element: string;
  vars: string[];
}

export function VariablesUsed({ groups }: { groups: ElementVariables[] }) {
  return (
    <View style={{ marginTop: 8, marginBottom: 24, gap: 8 }}>
      {groups.map((group) => (
        <View key={group.element}>
          <Text style={{ fontSize: 11, fontFamily: 'monospace', fontWeight: '700', opacity: 0.7 }}>
            {group.element}
          </Text>
          {group.vars.map((name) => (
            <Text key={name} style={{ fontSize: 11, fontFamily: 'monospace', opacity: 0.55, paddingLeft: 10 }}>
              {name}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
}

export function Example({
  name,
  children,
  groups,
}: {
  /** State/variant name shown above the example, e.g. "Default", "Hover", "Disabled". */
  name: string;
  children: React.ReactNode;
  groups: ElementVariables[];
}) {
  return (
    <View style={{ marginBottom: 28 }}>
      <Text
        style={{
          fontSize: 12,
          fontFamily: 'monospace',
          fontWeight: '700',
          marginBottom: 10,
          opacity: 0.5,
          textTransform: 'uppercase',
          letterSpacing: 0.5,
        }}
      >
        {name}
      </Text>
      {children}
      <VariablesUsed groups={groups} />
    </View>
  );
}

export const SPACING_VARS = ['--space-16', '--space-12', '--space-8', '--space-4'];
export const RADIUS_VARS = ['--border-radius-8'];
export const LABEL_TYPE_VARS = ['--type-family-primary', '--type-weight-bold-700', '--label', '--type-lh-label'];
