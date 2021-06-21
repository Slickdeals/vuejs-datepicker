import path from 'path'
import {terser} from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import node from 'rollup-plugin-node-resolve'
import css from 'rollup-plugin-css-only'

export default [{
  input: path.join(__dirname, '..', 'src', 'index.js'),
  output: [
    {
      file: 'dist/vuejs-datepicker.js',
      format: 'umd',
      name: 'vuejsDatepicker'
    },
    {
      file: 'dist/vuejs-datepicker.common.js',
      format: 'cjs'
    },
    {
      file: 'dist/vuejs-datepicker.esm.js',
      format: 'es'
    }
  ],
  plugins: [
    node({
      extensions: ['.js', '.jsx', '.vue']
    }),
    css(),
    vue(),
    postcss({plugins: [autoprefixer()]}),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    commonjs(),
    babel({exclude: 'node_modules/**'})
  ],
  external: ['vue'],
}, {
  input: path.join(__dirname, '..', 'src', 'components', 'Datepicker.vue'),
  output: {
    file: 'dist/vuejs-datepicker.min.js',
    format: 'umd',
    name: 'vuejsDatepicker',
    exports: 'named',
    sourcemap: false
  },
  plugins: [
    vue(),
    postcss({plugins: [autoprefixer()]}),
    commonjs(),
    terser(),
    babel({exclude: 'node_modules/**'})
  ],
  external: ['vue'],
}]
