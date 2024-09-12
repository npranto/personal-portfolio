import { z } from 'zod';
import about from '../../content/about.json' assert { type: 'json' };

const AboutSchema = z.object({
	id: z.string(),
	header: z.string(),
	mainContent: z.array(
		z.object({
			sectionContent: z.array(z.string()), // Array of strings
		})
	),
	secondaryContent: z.array(
		z.object({
			sectionHeader: z.string(),
			sectionContent: z.array(z.string()), // Array of strings
		})
	),
});

export const validateAboutContent = async () => {
	console.log('==================================================');
	console.log('👉🏼 Validating `content/about.json` (STATIC)');

	const { success, data, error } = AboutSchema.safeParse(about);

	if (!success) {
		console.error('❌ Content does NOT match `AboutSchema` 💥');
		console.error('Error Details:', error.format());

		return {
			data: null,
			error: error.format(),
			success: false,
		};
	}

	console.log('✅ Content matches `AboutSchema` successfully! 🎉');
	console.log('==================================================');
	return {
		data,
		error: null,
		success: true,
	};
};
