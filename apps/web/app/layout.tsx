import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './fonts.css';

export const metadata: Metadata = {
  title: 'MeetMedico UI — Web',
  description: 'Proof that @meetmedico/ui renders on the web via react-native-web.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
