/* eslint-disable import/no-extraneous-dependencies */
const chalk = require('chalk');
const getEntry = require('../vendor/contentful/getEntry');

module.exports = function education() {
  console.log('==================================================');
  console.log(chalk.bold('START'), chalk.dim('>>> Fetching education...'));
  console.log('==================================================');

  return getEntry({ contentType: 'education', fieldId: 'Default - Education' })
    .then((fields) => {
      console.log(chalk.green(JSON.stringify({ fields }, null, 2)));

      console.log('==================================================');
      console.log(chalk.bold('END'), chalk.dim('>>> Fetching education...'));
      console.log('==================================================');

      return {
        header: fields?.header || '',
        items: fields?.items || [],
      };
    })
    .catch((e) => {
      console.log(chalk.red('Error fetching education', e.message));

      console.log('==================================================');
      console.log(chalk.bold('END'), chalk.dim('>>> Fetching education...'));
      console.log('==================================================');
    });
};
