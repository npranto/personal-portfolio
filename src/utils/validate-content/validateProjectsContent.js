import { promisify } from '@/utils/promisify';

const ProjectsSchema = z.object({
	// Add schema details here
});

export const validateProjectsContent = async () => {
	console.log('==================================================');
	console.log('👉🏼 Fetching `content/projects.json` (STATIC)');

	const { success, data, error } = await promisify(getProjectsContent());

	if (!success) {
		console.error(
			'❌ Error importing `content/projects.json` file:',
			error.message
		);
		return { data: null, error, success: false };
	}

	const {
		success: isValid,
		data: parsedData,
		error: validationError,
	} = ProjectsSchema.safeParse(data);

	if (!isValid) {
		console.error(
			'❌ Data inside `content/projects.json` does not match `ProjectsSchema`',
			validationError.message
		);
		return {
			data: null,
			error: new Error(validationError.message),
			success: false,
		};
	}

	console.log(
		'✅ Data validation for `content/projects.json` passed successfully!'
	);
	console.log('==================================================');
	return { data: parsedData, error: null, success: true };
};
