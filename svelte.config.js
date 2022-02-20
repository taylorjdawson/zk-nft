import adapter from '@sveltejs/adapter-auto'
import nodePolyfills from 'rollup-plugin-polyfill-node'

const MODE = process.env.NODE_ENV

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    vite: {
      plugins: [
        // ↓ Have to check the mode here because this cant run on build
        MODE === 'development'
          ? nodePolyfills({
              include: ['node_modules/**/*.js', new RegExp('node_modules/.vite/.*js')]
            })
          : ''
      ],
      build: {
        rollupOptions: {
          plugins: [
            // ↓ Needed for build
            nodePolyfills()
          ]
        },
        // ↓ Needed for build
        commonjsOptions: {
          transformMixedEsModules: true
        }
      }
    }
  }
}

export default config
