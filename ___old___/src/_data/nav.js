/* eslint-disable import/no-extraneous-dependencies */
const chalk = require('chalk');
const getEntry = require('../vendor/contentful/getEntry');

module.exports = function nav() {
	console.log('==================================================');
	console.log(chalk.bold('START'), chalk.dim('>>> Fetching nav...'));
	console.log('==================================================');

	return getEntry({ contentType: 'nav', fieldId: 'Default - Nav' })
		.then((fields) => {
			console.log(chalk.green(JSON.stringify({ fields }, null, 2)));

			console.log('==================================================');
			console.log(chalk.bold('END'), chalk.dim('>>> Fetching nav...'));
			console.log('==================================================');

			return fields;
		})
		.catch((e) => {
			console.log(chalk.red('Error fetching nav', e.message));

			console.log('==================================================');
			console.log(chalk.bold('END'), chalk.dim('>>> Fetching nav...'));
			console.log('==================================================');
		});
};
