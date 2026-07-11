'use client';

import { useState } from 'react';

import { catalogEntries } from '@meetmedico/ui/catalog';
import { ThemeProvider, useAppColorScheme, darkColors, lightColors } from '@meetmedico/ui';

const sections = ['Foundations', 'Components'] as const;

function ThemeToggle() {
  const { scheme, setScheme } = useAppColorScheme();
  const isDark = scheme === 'dark';
  const colors = isDark ? darkColors : lightColors;

  return (
    <button
      onClick={() => setScheme(isDark ? 'light' : 'dark')}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        padding: '6px 10px',
        border: `1px solid ${colors.neutral[100]}`,
        borderRadius: 8,
        background: 'transparent',
        color: colors.neutral[900],
        fontSize: 13,
        cursor: 'pointer',
      }}
    >
      {isDark ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}

function CatalogPageInner() {
  const [selected, setSelected] = useState(catalogEntries[0]);
  const { scheme } = useAppColorScheme();
  const colors = scheme === 'dark' ? darkColors : lightColors;

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        fontFamily: 'sans-serif',
        background: colors.background,
        color: colors.neutral[900],
      }}
    >
      <nav
        style={{
          width: 240,
          flexShrink: 0,
          borderRight: `1px solid ${colors.neutral[100]}`,
          padding: '16px 0',
          overflowY: 'auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 16px 16px',
          }}
        >
          <div style={{ fontWeight: 700, fontSize: 15 }}>MeetMedico UI</div>
          <ThemeToggle />
        </div>
        {sections.map((section) => (
          <div key={section} style={{ marginBottom: 16 }}>
            <div
              style={{
                padding: '4px 16px',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 0.5,
                textTransform: 'uppercase',
                color: colors.neutral[500],
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
                    background: selected.name === entry.name ? colors.primary[50] : 'transparent',
                    color: selected.name === entry.name ? colors.primary[600] : colors.neutral[900],
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
        <div
          style={{
            padding: '16px 24px',
            borderBottom: `1px solid ${colors.neutral[100]}`,
            fontSize: 13,
            color: colors.neutral[500],
          }}
        >
          {selected.section} / {selected.name}
        </div>
        <selected.Component />
      </main>
    </div>
  );
}

export default function CatalogPage() {
  return (
    <ThemeProvider>
      <CatalogPageInner />
    </ThemeProvider>
  );
}
