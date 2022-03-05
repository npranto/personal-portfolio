/* eslint-disable import/no-extraneous-dependencies */
const chalk = require('chalk');
const getBlogPosts = require('../utils/getBlogPosts');

module.exports = function blog() {
  console.log('==================================================');
  console.log(chalk.bold('START'), chalk.dim('>>> Fetching blog...'));
  console.log('==================================================');

  return getBlogPosts()
    .then((posts) => {
      console.log(chalk.green(JSON.stringify({ posts }, null, 2)));

      console.log('==================================================');
      console.log(chalk.bold('END'), chalk.dim('>>> Fetching blog...'));
      console.log('==================================================');

      return { posts };
    })
    .catch((e) => {
      console.log(chalk.red('Error fetching blog', e.message));

      console.log('==================================================');
      console.log(chalk.bold('END'), chalk.dim('>>> Fetching blog...'));
      console.log('==================================================');
    });
};
