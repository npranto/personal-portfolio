import { z } from 'zod';
import { fromError } from 'zod-validation-error';
import videos from '../../content/videos.json' assert { type: 'json' };
import chalk from 'chalk';

const VideosSchema = z.object({
	id: z.literal('content:socials'),
	videos: z.array(
		z.object({
			src: z.string().url(),
			title: z.string(),
		})
	),
});

export const validateVideosContent = async () => {
	console.log('👉🏼', chalk.bgWhite.black('Validating `content/videos.json`'));
	const { success, data, error } = VideosSchema.safeParse(videos);

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
