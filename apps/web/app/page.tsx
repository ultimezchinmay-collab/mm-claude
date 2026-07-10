'use client';

import { useState } from 'react';

import { catalogEntries } from '@meetmedico/ui/catalog';
import { ThemeProvider } from '@meetmedico/ui';

const sections = ['Foundations', 'Components'] as const;

export default function CatalogPage() {
  const [selected, setSelected] = useState(catalogEntries[0]);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <nav
        style={{
          width: 240,
          flexShrink: 0,
          borderRight: '1px solid #e0e0e0',
          padding: '16px 0',
          overflowY: 'auto',
        }}
      >
        <div style={{ padding: '0 16px 16px', fontWeight: 700, fontSize: 15 }}>MeetMedico UI</div>
        {sections.map((section) => (
          <div key={section} style={{ marginBottom: 16 }}>
            <div
              style={{
                padding: '4px 16px',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 0.5,
                textTransform: 'uppercase',
                color: '#888',
              }}
            >
              {section}
            </div>
            {catalogEntries
              .filter((entry) => entry.section === section)
              .map((entry) => (
                <button
                  key={entry.name}
                  onClick={() => setSelected(entry)}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    padding: '8px 16px',
                    border: 'none',
                    background: selected.name === entry.name ? '#eef7f1' : 'transparent',
                    color: selected.name === entry.name ? '#1daa65' : '#333',
                    fontWeight: selected.name === entry.name ? 600 : 400,
                    fontSize: 14,
                    cursor: 'pointer',
                  }}
                >
                  {entry.name}
                </button>
              ))}
          </div>
        ))}
      </nav>
      <main style={{ flex: 1, overflowY: 'auto' }}>
        <div style={{ padding: '16px 24px', borderBottom: '1px solid #e0e0e0', fontSize: 13, color: '#888' }}>
          {selected.section} / {selected.name}
        </div>
        <ThemeProvider>
          <selected.Component />
        </ThemeProvider>
      </main>
    </div>
  );
}
