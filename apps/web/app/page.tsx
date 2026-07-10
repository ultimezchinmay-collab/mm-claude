'use client';

import { Button } from '@meetmedico/ui/components/Button';

export default function Home() {
  return (
    <main style={{ padding: 32, fontFamily: 'sans-serif' }}>
      <h1>@meetmedico/ui on the web</h1>
      <p>The button below is the same React Native component used in the mobile app, rendered via react-native-web.</p>
      <div style={{ marginTop: 24, maxWidth: 240 }}>
        <Button label="Continue" variant="primary" onPress={() => alert('It works on the web!')} />
      </div>
    </main>
  );
}
