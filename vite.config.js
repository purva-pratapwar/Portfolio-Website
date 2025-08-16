import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/Portfolio-Website/', // ✅ Crucial for GitHub Pages or subfolder deployment
    server: {
        port: 3000, // ✅ Optional, for local dev
    },
    build: {
        outDir: 'dist', // ✅ Explicit output folder
        emptyOutDir: true, // ✅ Clears folder before build
        sourcemap: false // ✅ Optional, disables source maps for prod
    }
});
