import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import * as path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'

const ENV_PREFIX = 'APP_'

export default defineConfig(({ mode }) => {
  process.env = loadEnv(mode, process.cwd(), '')

  return {
    base: '/',
    plugins: [react(), eslint(), tsconfigPaths()],
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
    envPrefix: ENV_PREFIX,
    server: {
      port: 3000,
      proxy: {
        '/api': {
          target: process.env.APP_BACKEND_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    preview: {
      host: '0.0.0.0',
      port: 8000,
    },
  }
})
