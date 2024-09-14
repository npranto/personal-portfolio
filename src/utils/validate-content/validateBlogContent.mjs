import { z } from 'zod';
import { fromError } from 'zod-validation-error';
import blog from '../../content/blog.json' assert { type: 'json' };
import chalk from 'chalk';

const BlogSchema = z.object({
	id: z.literal('content:blog'),
	posts: z.array(
		z.object({
			href: z.string().url(),
			title: z.string().url(),
			publishedOn: z.string(),
		})
	),
});

export const validateBlogContent = async () => {
	console.log('👉🏼', chalk.bgWhite.black('Validating `content/blog.json`'));
	const { success, data, error } = BlogSchema.safeParse(blog);

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
