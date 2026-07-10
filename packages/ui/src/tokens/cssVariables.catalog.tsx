import { ScrollView, Text, View } from 'react-native';

import { lightColors, darkColors } from './colors';
import { colorVariables, staticVariables, type CssVariable } from './cssVariables';

export const title = 'CSS Variables';

function VariableRow({ name, value }: CssVariable) {
  const isColor = value.startsWith('#');
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
      {isColor ? (
        <View
          style={{
            width: 16,
            height: 16,
            borderRadius: 4,
            backgroundColor: value,
            marginRight: 8,
            borderWidth: 1,
            borderColor: '#8884',
          }}
        />
      ) : null}
      <Text style={{ fontSize: 12, fontFamily: 'monospace', width: 260 }}>{name}</Text>
      <Text style={{ fontSize: 12, opacity: 0.7 }}>{value}</Text>
    </View>
  );
}

function Section({ title, entries }: { title: string; entries: CssVariable[] }) {
  return (
    <View style={{ marginBottom: 24 }}>
      <Text style={{ fontSize: 16, fontWeight: '700', marginBottom: 8 }}>{title}</Text>
      {entries.map((entry) => (
        <VariableRow key={entry.name} {...entry} />
      ))}
    </View>
  );
}

export default function CssVariablesCatalog() {
  return (
    <ScrollView style={{ padding: 12 }}>
      <Section title=":root (light)" entries={[...colorVariables(lightColors), ...staticVariables()]} />
      <Section title="[data-theme='dark']" entries={colorVariables(darkColors)} />
    </ScrollView>
  );
}
