import { z } from 'zod';
import { fromError } from 'zod-validation-error';
import work from '../../content/work.json' assert { type: 'json' };
import chalk from 'chalk';

const WorkSchema = z.object({
	id: z.literal('content:work'),
	header: z.string(),
	items: z.array(
		z.object({
			id: z.string(),
			image: z.object({
				id: z.string(),
				sm: z.string(),
				lg: z.string(),
			}),
			position: z.string(),
			company: z.string(),
			location: z.string(),
			duration: z.string(),
			employmentType: z.string(),
			isCurrent: z.boolean().optional(),
			description: z.array(z.string()),
			technologies: z.array(z.string()),
		})
	),
});

export const validateWorkContent = async () => {
	console.log('👉🏼', chalk.bgWhite.black('Validating `content/work.json`'));
	const { success, data, error } = WorkSchema.safeParse(work);

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
