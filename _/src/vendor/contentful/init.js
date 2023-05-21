require('dotenv').config();
const contentful = require('contentful');
const { SPACE_ID, ACCESS_TOKEN } = require('./config');

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

module.exports = function initialize() {
  return client;
};
