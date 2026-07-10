import { ScrollView, Text, View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native';

import { webSpacing, tabletSpacing, mobileSpacing } from './spacing';

function Row({ name, value }: { name: string; value: number }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
      <Text style={{ width: 120, fontSize: 12, fontFamily: 'monospace' }}>{name}</Text>
      <View style={{ width: value, height: 16, backgroundColor: '#1DAA65', borderRadius: 2 }} />
      <Text style={{ marginLeft: 8, fontSize: 11, opacity: 0.6 }}>{value}</Text>
    </View>
  );
}

function Scale({
  title,
  scale,
}: {
  title: string;
  scale: typeof webSpacing | typeof tabletSpacing | typeof mobileSpacing;
}) {
  return (
    <View style={{ marginBottom: 24 }}>
      <Text style={{ fontSize: 16, fontWeight: '700', marginBottom: 8 }}>{title}</Text>
      {Object.entries(scale).map(([key, value]) => (
        <Row key={key} name={`--${key}`} value={value} />
      ))}
    </View>
  );
}

function SpacingTokens() {
  return (
    <ScrollView style={{ padding: 12 }}>
      <Scale title="Web" scale={webSpacing} />
      <Scale title="Tablet" scale={tabletSpacing} />
      <Scale title="Mobile" scale={mobileSpacing} />
    </ScrollView>
  );
}

const meta: Meta<typeof SpacingTokens> = {
  title: 'Foundations/Spacing',
  component: SpacingTokens,
};

export default meta;
type Story = StoryObj<typeof SpacingTokens>;

export const AllSpacing: Story = {};
