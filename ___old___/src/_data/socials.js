/* eslint-disable import/no-extraneous-dependencies */
const chalk = require('chalk');
const getEntry = require('../vendor/contentful/getEntry');

module.exports = function socials() {
	console.log('==================================================');
	console.log(chalk.bold('START'), chalk.dim('>>> Fetching socials...'));
	console.log('==================================================');

	return getEntry({ contentType: 'socials', fieldId: 'Default - Socials' })
		.then((fields) => {
			console.log(chalk.green(JSON.stringify({ fields }, null, 2)));

			console.log('==================================================');
			console.log(chalk.bold('END'), chalk.dim('>>> Fetching socials...'));
			console.log('==================================================');

			return fields;
		})
		.catch((e) => {
			console.log(chalk.red('Error fetching socials', e.message));

			console.log('==================================================');
			console.log(chalk.bold('END'), chalk.dim('>>> Fetching socials...'));
			console.log('==================================================');
		});
};
