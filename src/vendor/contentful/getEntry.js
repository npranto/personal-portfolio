/* eslint-disable import/no-extraneous-dependencies */
const extractFields = require('./extractFields');
const client = require('./init')();

module.exports = function getEntry(options = {}) {
  if (
    !options.contentType ||
    !options.fieldId ||
    typeof options.contentType !== 'string' ||
    typeof options.fieldId !== 'string'
  ) {
    Promise.reject(
      new Error(
        'Please provide a valid `contentType` and `fieldId` to get entry'
      )
    );
  }

  return client
    .getEntries({
      include: 5,
      content_type: options?.contentType,
      'fields.id': options?.fieldId,
    })
    .then((entry) => extractFields(entry?.items[0]))
    .catch((e) => {
      throw e;
    });
};
