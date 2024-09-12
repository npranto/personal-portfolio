import { promisify } from '../promisify';
import Education from '../../content/education.json' assert { type: 'json' };

const EducationSchema = z.object({
	// Add schema details here
});

export const validateEducationContent = async () => {
	console.log('==================================================');
	console.log('👉🏼 Validating `content/education.json` (STATIC)');

	const { success, data, error } = EducationSchema.safeParse(education);

	if (!success) {
		console.error('❌ Content does NOT match `EducationSchema` 💥');
		console.error('Error Details:', error.format());

		return {
			data: null,
			error: error.format(),
			success: false,
		};
	}

	console.log('✅ Content matches `EducationSchema` successfully! 🎉');
	console.log('==================================================');
	return {
		data,
		error: null,
		success: true,
	};
};
