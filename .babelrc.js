module.exports = {
	'env': {
		'test': {
			presets: [
				'@babel/preset-env'
			],
			plugins: [
				require('@babel/plugin-transform-runtime'),
			],
		},
	},
};
