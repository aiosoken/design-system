import { defineConfig } from 'tsup';

export default defineConfig([
  // NPM package builds (ESM + CJS)
  {
    entry: ['lib/index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    sourcemap: true,
    clean: true,
    external: [
      'react',
      'react-dom',
      'react/jsx-runtime',
    ],
    treeshake: true,
    splitting: false,
    minify: false,
    outDir: 'dist',
  },
  // CDN build (IIFE)
  {
    entry: ['lib/index.ts'],
    format: ['iife'],
    globalName: 'AIODesignSystem',
    outDir: 'dist',
    outExtension: () => ({ js: '.global.js' }),
    minify: true,
    sourcemap: true,
    external: [
      'react',
      'react-dom',
    ],
    platform: 'browser',
    esbuildOptions(options) {
      options.banner = {
        js: '/* AIO Design System - https://github.com/aiosoken/design-system */',
      };
    },
  },
]);
