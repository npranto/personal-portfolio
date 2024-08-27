/* eslint-disable import/no-extraneous-dependencies */
const chalk = require('chalk');
const getEntry = require('../vendor/contentful/getEntry');

module.exports = function about() {
	console.log('==================================================');
	console.log(chalk.bold('START'), chalk.dim('>>> Fetching about...'));
	console.log('==================================================');

	return getEntry({ contentType: 'about', fieldId: 'Default - About' })
		.then((fields) => {
			console.log(chalk.green(JSON.stringify({ fields }, null, 2)));

			console.log('==================================================');
			console.log(chalk.bold('END'), chalk.dim('>>> Fetching about...'));
			console.log('==================================================');

			return {
				header: fields?.header || '',
				focusContent: fields?.focusContent || '',
				readMoreContent: fields?.readMoreContent || '',
			};
		})
		.catch((e) => {
			console.log(chalk.red('Error fetching about', e.message));

			console.log('==================================================');
			console.log(chalk.bold('END'), chalk.dim('>>> Fetching about...'));
			console.log('==================================================');
		});
};
