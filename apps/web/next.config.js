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
    '@hugeicons/core-free-icons',
  ],
  turbopack: {
    resolveAlias: {
      'react-native': 'react-native-web',
      '@expo/vector-icons': './stubs/expo-vector-icons-stub.js',
      '@expo/vector-icons/MaterialCommunityIcons': './stubs/expo-vector-icons-stub.js',
      'expo-modules-core': './stubs/expo-vector-icons-stub.js',
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
