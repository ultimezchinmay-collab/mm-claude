import { ScrollView, Text, View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native';

import { webRadii, tabletRadii, mobileRadii } from './radii';

function Swatch({ name, value }: { name: string; value: number }) {
  return (
    <View style={{ width: 130, marginRight: 12, marginBottom: 12, alignItems: 'center' }}>
      <View
        style={{
          width: 64,
          height: 64,
          borderRadius: value,
          backgroundColor: '#1DAA65',
        }}
      />
      <Text style={{ fontSize: 11, marginTop: 6, fontFamily: 'monospace' }}>{name}</Text>
      <Text style={{ fontSize: 10, opacity: 0.6 }}>{value}</Text>
    </View>
  );
}

function Scale({
  title,
  scale,
}: {
  title: string;
  scale: typeof webRadii | typeof tabletRadii | typeof mobileRadii;
}) {
  return (
    <View style={{ marginBottom: 24 }}>
      <Text style={{ fontSize: 16, fontWeight: '700', marginBottom: 8 }}>{title}</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {Object.entries(scale).map(([key, value]) => (
          <Swatch key={key} name={`--${key}`} value={value} />
        ))}
      </View>
    </View>
  );
}

function RadiusTokens() {
  return (
    <ScrollView style={{ padding: 12 }}>
      <Scale title="Web" scale={webRadii} />
      <Scale title="Tablet" scale={tabletRadii} />
      <Scale title="Mobile" scale={mobileRadii} />
    </ScrollView>
  );
}

const meta: Meta<typeof RadiusTokens> = {
  title: 'Foundations/Radius',
  component: RadiusTokens,
};

export default meta;
type Story = StoryObj<typeof RadiusTokens>;

export const AllRadii: Story = {};
