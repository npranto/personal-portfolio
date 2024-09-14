import { z } from 'zod';
import { fromError } from 'zod-validation-error';
import socials from '../../content/socials.json' assert { type: 'json' };
import chalk from 'chalk';

const SocialsSchema = z.object({
	id: z.literal('content:socials'),
	github: z.string().url(),
	linkedin: z.string().url(),
	twitter: z.string().url(),
	devto: z.string().url(),
	medium: z.string().url(),
	youtube: z.string().url(),
});

export const validateSocialsContent = async () => {
	console.log('👉🏼', chalk.bgWhite.black('Validating `content/socials.json`'));
	const { success, data, error } = SocialsSchema.safeParse(socials);

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
