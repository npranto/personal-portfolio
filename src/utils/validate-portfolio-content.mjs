import chalk from 'chalk';
import { z } from 'zod';
import { fromError } from 'zod-validation-error';
import about from '../../content/about.json' assert { type: 'json' };

const AboutSchema = z.object({
	id: z.string(),
	header: z.string(),
	mainContent: z.array(
		z.object({
			sectionContent: z.array(z.string()),
		})
	),
	secondaryContent: z.array(
		z.object({
			sectionHeader: z.string(),
			sectionContent: z.array(z.string()),
		})
	),
});

export const validateAboutContent = async () => {
	console.log('👉🏼', chalk.bgWhite.black('Validating `content/about.json`'));

	const { success, data, error } = AboutSchema.safeParse(about);

	if (!success) {
		console.log(`❌ Status: ${chalk.red.bold('Failed')} 💥`);
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

	console.log(`✅ Status: ${chalk.green.bold('Passed')} 🎉`);

	return {
		data,
		error: null,
		success: true,
	};
};
