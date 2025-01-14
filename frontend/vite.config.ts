import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000,
    host: true,
    strictPort: true,
    origin: "http://0.0.0.0:4000",
    watch: {
      usePolling: true,
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    pool: "vmThreads",
    server: {
      deps: {
        inline: [/@react-spectrum.*/],
      },
    },
  },
});
