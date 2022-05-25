const { build } = require('esbuild')
const { vanillaExtractPlugin } = require('@vanilla-extract/esbuild-plugin')

build({
  // incremental: true,
  bundle: true,
  define: {
    'process.env.NODE_ENV': JSON.stringify(
      process.env.NODE_ENV || 'development'
    ),
  },
  minify: process.env.NODE_ENV === 'production',
  entryPoints: ['src/index.ts'],
  external: ['react', 'react-dom'],
  outdir: 'lib',
  platform: 'node',
  // splitting: true,
  format: 'esm',
  target: ['esnext'],
  plugins: [vanillaExtractPlugin()],
  // jsxFactory: 'createElement',
  // banner: {
  //   js: "import { createElement } from 'react';\n",
  // },
}).catch(e => {
  console.log(e)
  process.exit(1)
})
