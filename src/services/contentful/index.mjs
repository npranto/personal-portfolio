import 'dotenv/config';
import * as contentful from 'contentful';
import {
	SPACE_ID,
	ACCESS_TOKEN,
	CORE_CONTENT_TYPE,
	CORE_FIELD_ID,
} from '../../config/index.mjs';

const isObject = (obj) =>
	typeof obj === 'object' && !Array.isArray(obj) && obj !== null;

const extractFields = (entry) => {
	if (Array.isArray(entry)) {
		return entry.map((e) => extractFields(e));
	}

	if (isObject(entry)) {
		if (entry.fields) return extractFields(entry.fields);

		const obj = {};
		for (const prop in entry) {
			obj[prop] = extractFields(entry[prop]);
		}
		return obj;
	}

	return entry;
};

const getEntry = async ({ client, contentType = '', fieldId = '' } = {}) => {
	if (
		!contentType ||
		!fieldId ||
		typeof contentType !== 'string' ||
		typeof fieldId !== 'string' ||
		!contentType.trim() ||
		!fieldId.trim()
	) {
		return {
			success: false,
			data: null,
			error: 'Please provide valid `contentType` and `fieldId` values',
		};
	}

	try {
		const entries = await client.getEntries({
			include: 5,
			content_type: contentType,
			'fields.id': fieldId,
		});
		const entry = entries?.items[0];
		const formattedEntry = extractFields(entry);
		return {
			success: true,
			data: formattedEntry,
			error: null,
		};
	} catch (error) {
		console.error(
			`Error fetching entry from Contentful for "contentType": [${contentType}] | "fieldId": [${fieldId}]`,
			error.message
		);
		return {
			success: false,
			data: null,
			error: error.message,
		};
	}
};

export const ContentfulService = () => {
	const client = contentful.createClient({
		space: SPACE_ID,
		accessToken: ACCESS_TOKEN,
	});

	return {
		getPortfolioCore: async () =>
			await getEntry({
				client,
				contentType: CORE_CONTENT_TYPE,
				fieldId: CORE_FIELD_ID,
			}),
	};
};
