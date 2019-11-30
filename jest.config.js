const jestConfig = require('@itsjonq/zero/jest');

module.exports = Object.assign(jestConfig, {
	collectCoverageFrom: [
		...jestConfig.collectCoverageFrom,
		'!src/MediaQuery/**/*.{js,ts,tsx}',
		'!src/Viewport/**/*.{js,ts,tsx}',
	],
});
