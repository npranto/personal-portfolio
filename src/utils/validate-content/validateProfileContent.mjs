import { z } from 'zod';
import { fromError } from 'zod-validation-error';
import profile from '../../content/profile.json' assert { type: 'json' };
import chalk from 'chalk';

const ProfileSchema = z.object({
	id: z.literal('content:profile'),
	description: z.string(),
	title: z.string(),
	picture: z.object({
		id: z.string(),
		sm: z.string(),
		lg: z.string(),
	}),
	author: z.string(),
	currentRole: z.string(),
	location: z.string(),
	highlightedRoles: z.array(z.string()),
	resumeHref: z.string(),
	contactHref: z.string(),
	nickname: z.string(),
});

export const validateProfileContent = async () => {
	console.log('👉🏼', chalk.bgWhite.black('Validating `content/profile.json`'));
	const { success, data, error } = ProfileSchema.safeParse(profile);

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
