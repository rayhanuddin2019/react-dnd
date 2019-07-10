/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

function createWebpackConfiguration() {
	return {
		entry: './lib/index.js',
		resolve: {
			modules: [
				path.join(process.cwd(), 'node_modules'),
				path.join(__dirname, '../node_modules'),
			],
		},
		output: {
			path: path.resolve(process.cwd(), 'dist/umd'),
			libraryTarget: 'umd',
		},
		externals: [
			{
				react: {
					root: 'React',
					commonjs2: 'react',
					commonjs: 'react',
					amd: 'react',
				},
			},
		],
	}
}

module.exports = library => (env, { mode }) => {
	const commonConfig = createWebpackConfiguration()
	return {
		...commonConfig,
		context: process.cwd(),
		output: {
			...commonConfig.output,
			library,
			filename: `${library}.${mode === 'production' ? 'min.' : ''}js`,
		},
	}
}
