/* eslint-disable import/no-extraneous-dependencies */
const chalk = require('chalk');
const getEntry = require('../vendor/contentful/getEntry');

module.exports = function work() {
  console.log('==================================================');
  console.log(chalk.bold('START'), chalk.dim('>>> Fetching work...'));
  console.log('==================================================');

  return getEntry({ contentType: 'work', fieldId: 'Default - Work' })
    .then((fields) => {
      console.log(chalk.green(JSON.stringify({ fields }, null, 2)));

      console.log('==================================================');
      console.log(chalk.bold('END'), chalk.dim('>>> Fetching work...'));
      console.log('==================================================');

      return {
        header: fields?.header || '',
        items: fields?.items || [],
      };
    })
    .catch((e) => {
      console.log(chalk.red('Error fetching work', e.message));

      console.log('==================================================');
      console.log(chalk.bold('END'), chalk.dim('>>> Fetching work...'));
      console.log('==================================================');
    });
};
