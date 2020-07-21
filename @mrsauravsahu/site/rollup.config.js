import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import svelte from 'rollup-plugin-svelte';
import babel from 'rollup-plugin-babel';
import json from "@rollup/plugin-json";
import { terser } from 'rollup-plugin-terser';
import config from 'sapper/config/rollup.js';
import pkg from './package.json';
import autoPreprocess from 'svelte-preprocess';
import typeScript from '@rollup/plugin-typescript';

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) => {
	if (warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) return;
	if (warning.code === 'THIS_IS_UNDEFINED') return;
	if (warning.code === 'EMPTY_BUNDLE') return;
	if (warning.code === 'PLUGIN_WARNING') return;
	onwarn(warning);
}

export default {
	client: {
		input: config.client.input().replace(/\.js$/, '.ts'),
		output: config.client.output(),
		plugins: [
			json(),
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode),
				'process.env.BLOGS_BASE_URL': JSON.stringify(process.env.BLOGS_BASE_URL),
			}),
			svelte({
				dev,
				hydratable: true,
				emitCss: true,
				preprocess: autoPreprocess(),
			}),
			resolve({
				browser: true,
				dedupe: ['svelte']
			}),
			commonjs(),
			typeScript({ sourceMap: dev }),

			legacy && babel({
				extensions: ['.js', '.mjs', '.html', '.svelte'],
				runtimeHelpers: true,
				exclude: ['node_modules/@babel/**'],
				presets: [
					['@babel/preset-env', {
						targets: '> 0.25%, not dead'
					}]
				],
				plugins: [
					'@babel/plugin-syntax-dynamic-import',
					['@babel/plugin-transform-runtime', {
						useESModules: true
					}]
				]
			}),

			!dev && terser({
				module: true
			})
		],

		onwarn,
	},

	server: {
		input: config.server.input().server.replace(/\.js$/, '.ts'),
		output: config.server.output(),
		plugins: [
			json(),
			replace({
				'process.browser': false,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			svelte({
				generate: 'ssr',
				dev,
				preprocess: autoPreprocess(),
			}),
			resolve({
				dedupe: ['svelte']
			}),
			commonjs(),
			typeScript({ sourceMap: dev }),
		],
		external: Object.keys(pkg.dependencies).concat(
			require('module').builtinModules || Object.keys(process.binding('natives'))
		),

		onwarn,
	},

	serviceworker: {
		input: config.serviceworker.input().replace(/\.js$/, '.ts'),
		output: config.serviceworker.output(),
		plugins: [
			resolve(),
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			commonjs(),
			typeScript({ sourceMap: dev }),
			!dev && terser()
		],

		onwarn,
	}
};
