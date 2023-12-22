const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const { terser } = require('rollup-plugin-terser')

module.exports = [
  {
    // 核心选项
    input: './src/index.js', // 必须
    output: [
      {
        dir: 'lib',
        format: 'cjs',
        entryFileNames: '[name].cjs.js',
        sourcemap: false,
      },
      {
        dir: 'lib',
        format: 'esm',
        entryFileNames: '[name].esm.js',
        sourcemap: false,
      },
      {
        dir: 'lib',
        format: 'umd',
        entryFileNames: '[name].umd.js',
        name: 'sw_utils',
        sourcemap: false,
        plugins: [terser()],
      },
    ],
    plugins: [resolve(), commonjs()],
  }
]
