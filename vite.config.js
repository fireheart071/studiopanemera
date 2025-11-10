import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Vite config: use esbuild minifier (fast) and disable sourcemaps for production builds.
// If you want to drop console statements or use terser, uncomment the terser section and
// install terser: `npm i -D terser` then set `minify: 'terser'` and provide terserOptions.

export default defineConfig(async () => {
  const plugins = [react()]

  // Optionally load rollup-plugin-visualizer if installed (non-fatal if missing)
  try {
    const mod = await import('rollup-plugin-visualizer')
    if (mod && mod.visualizer) {
      plugins.push(mod.visualizer({ filename: 'dist/bundle-stats.html', open: false }))
    }
  } catch {
    // visualizer not installed; skip
  }

  return {
    plugins,
    build: {
      // esbuild minification is fast and produces small bundles. Use 'terser' if
      // you need to drop console/debugger via terserOptions (requires terser installed).
      minify: 'esbuild',
      sourcemap: false,
      target: 'es2018',
      chunkSizeWarningLimit: 600,
    }
  }
})
