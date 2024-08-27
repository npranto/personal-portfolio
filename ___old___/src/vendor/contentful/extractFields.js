/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

const isObject = (obj) =>
	typeof obj === 'object' && !Array.isArray(obj) && obj !== null;

module.exports = function extractFields(entry) {
	if (Array.isArray(entry)) {
		return entry.map((e) => extractFields(e));
	}

	if (isObject(entry)) {
		if (entry.fields) {
			return extractFields(entry.fields);
		}
		const obj = {};
		for (const prop in entry) {
			obj[prop] = extractFields(entry[prop]);
		}
		return obj;
	}

	return entry;
};
