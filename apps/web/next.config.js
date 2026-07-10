/** @type {import('next').NextConfig} */
const nextConfig = {
  // These all ship untranspiled RN/JSX source that Next's default build
  // doesn't touch — react-native-web is the standard recipe for this.
  transpilePackages: [
    '@meetmedico/ui',
    'react-native',
    'react-native-web',
    'react-native-paper',
    'react-native-safe-area-context',
    'react-native-svg',
    '@hugeicons/react-native',
  ],
  turbopack: {
    resolveAlias: {
      'react-native': 'react-native-web',
    },
    resolveExtensions: [
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      '.js',
      '.mjs',
      '.jsx',
      '.ts',
      '.tsx',
      '.json',
    ],
  },
};

module.exports = nextConfig;
