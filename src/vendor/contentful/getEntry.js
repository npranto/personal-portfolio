/* eslint-disable import/no-extraneous-dependencies */
const chalk = require('chalk');
const extractFields = require('./extractFields');
const client = require('./init')();
const { USE_CACHE } = require('../../utils/cache/config');
const useCache = require('../../utils/cache/useCache');

const { getEntryFromCache, saveEntryToCache } = useCache();

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

  if (USE_CACHE) {
    console.log(chalk.cyan('>>> USING CACHE'));

    // get entry from cache
    const cacheEntry = getEntryFromCache(
      `${options?.contentType}___${options?.fieldId}`
    );
    // if entry does not exist in cache, fetch it
    if (cacheEntry === null) {
      console.log(chalk.dim('>>> Entry missing in cache, refetching'));
      return client
        .getEntries({
          include: 5,
          content_type: options?.contentType,
          'fields.id': options?.fieldId,
        })
        .then((entry) => {
          const fields = extractFields(entry?.items[0]);
          saveEntryToCache(
            `${options?.contentType}___${options?.fieldId}`,
            fields
          );
          return fields;
        })
        .catch((e) => {
          throw e;
        });
    }
    // else, return the cache entry
    return Promise.resolve(cacheEntry);
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
