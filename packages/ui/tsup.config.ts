import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  // TODO: re-enable once theme.ts's MD3 color-shape mismatch is fixed — dts generation
  // requires a full type-check, and that pre-existing error currently blocks it even
  // though it doesn't block the JS build or either app (both consume src/ directly).
  dts: false,
  clean: true,
  external: ['react', 'react-native'],
});
