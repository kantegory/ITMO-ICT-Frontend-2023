import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import mockServer from 'vite-plugin-mock-server'
import bodyParser from 'body-parser'

export default defineConfig(() => {
  return {
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      }),
      mockServer({
        logLevel: 'info',
        middlewares: [
          bodyParser.json(),
          bodyParser.urlencoded(),
          bodyParser.text(),
          bodyParser.raw(),
        ],
        mockRootDir: './src/mock',
      }),
    ],
    build: {
      sourcemap: false,
    },
    base: '',
    resolve: {
      alias: {
        src: fileURLToPath(new URL('./src', import.meta.url)),
        public: fileURLToPath(new URL('./public', import.meta.url)),
      },
    },
  }
})
