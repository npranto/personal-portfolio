import { z } from 'zod';
import { fromError } from 'zod-validation-error';
import projects from '../../content/projects.json' assert { type: 'json' };
import chalk from 'chalk';

const ProjectsSchema = z.object({
	id: z.literal('content:projects'),
	header: z.string(),
	items: z.array(
		z.object({
			id: z.string(),
			name: z.string(),
			duration: z.string(),
			image: z.object({
				id: z.string(),
				sm: z.string(),
			}),
			github: z.string().url(),
			demo: z.string().url(),
			details: z.array(z.string()),
			technologies: z.array(z.string()),
		})
	),
});

export const validateProjectsContent = async () => {
	console.log('👉🏼', chalk.bgWhite.black('Validating `content/projects.json`'));
	const { success, data, error } = ProjectsSchema.safeParse(projects);

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
