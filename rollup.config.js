import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';

const commonConfig = {
  plugins: [
    nodeResolve(),
    babel(babelrc()),
  ],
	input: 'index.js',
}

const cjsConfig = Object.assign({
  output: {
    file: 'dist/bundle.cjs.js',
    format: 'cjs',
  },
}, commonConfig)

const esConfig = Object.assign({
  output: {
    file: 'dist/bundle.es.js',
    format: 'es',
  },
}, commonConfig)

export default [
	cjsConfig,
	esConfig,
]