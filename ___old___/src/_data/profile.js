/* eslint-disable import/no-extraneous-dependencies */
const chalk = require('chalk');
const getEntry = require('../vendor/contentful/getEntry');

module.exports = function profile() {
	console.log('==================================================');
	console.log(chalk.bold('START'), chalk.dim('>>> Fetching profile...'));
	console.log('==================================================');

	return getEntry({ contentType: 'profile', fieldId: 'Default - Profile' })
		.then((fields) => {
			console.log(chalk.green(JSON.stringify({ fields }, null, 2)));

			console.log('==================================================');
			console.log(chalk.bold('END'), chalk.dim('>>> Fetching profile...'));
			console.log('==================================================');

			return fields;
		})
		.catch((e) => {
			console.log(chalk.red('Error fetching profile', e.message));

			console.log('==================================================');
			console.log(chalk.bold('END'), chalk.dim('>>> Fetching profile...'));
			console.log('==================================================');
		});
};
