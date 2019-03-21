module.exports = {
	'collectCoverageFrom': [
		'__test__/*.js'
	],
	'coveragePathIgnorePatterns': [
		'/node_modules/',
		'/coverage',
	],
	'coverageThreshold': {
		'global': {
			'statements': 100,
			'branches': 100,
			'functions': 100,
			'lines': 100
		}
	}
};

