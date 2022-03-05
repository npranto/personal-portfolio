/* eslint-disable import/no-extraneous-dependencies */
const chalk = require('chalk');
const getEntry = require('../vendor/contentful/getEntry');

module.exports = function projects() {
  console.log('==================================================');
  console.log(chalk.bold('START'), chalk.dim('>>> Fetching projects...'));
  console.log('==================================================');

  return getEntry({ contentType: 'projects', fieldId: 'Default - Projects' })
    .then((fields) => {
      console.log(chalk.green(JSON.stringify({ fields }, null, 2)));

      console.log('==================================================');
      console.log(chalk.bold('END'), chalk.dim('>>> Fetching projects...'));
      console.log('==================================================');

      return {
        header: fields?.header || '',
        items: fields?.items || [],
      };
    })
    .catch((e) => {
      console.log(chalk.red('Error fetching projects', e.message));

      console.log('==================================================');
      console.log(chalk.bold('END'), chalk.dim('>>> Fetching projects...'));
      console.log('==================================================');
    });
};
