import { promisify } from '../promisify.mjs';
import { fromError } from 'zod-validation-error';
import education from '../../content/education.json' assert { type: 'json' };
import { z } from 'zod';
import chalk from 'chalk';

const EducationSchema = z.object({
	id: z.literal('content:education'),
	header: z.string(),
	items: z.array(
		z.object({
			id: z.string(),
			institution: z.string(),
			duration: z.string(),
			location: z.string(),
			description: z.string(),
		})
	),
});

export const validateEducationContent = async () => {
	console.log('👉🏼', chalk.bgWhite.black('Validating `content/education.json`'));
	const { success, data, error } = EducationSchema.safeParse(education);

	if (!success) {
		console.log(`❌ Status: ${chalk.red('Failed')} 💥`);
		const validationError = fromError(error);
		if (validationError?.toString()?.length > 0) {
			console.error(
				chalk.dim(
					validationError
						.toString()
						.split('Validation error:')[1]
						.split(';')
						.map((error) => `- ${error.trim()}`)
						.join('\n')
				)
			);
		}

		return {
			data: null,
			error: error.format(),
			success: false,
		};
	}

	console.log(`✅ Status: ${chalk.green('Passed')} 🎉`);

	return {
		data,
		error: null,
		success: true,
	};
};
