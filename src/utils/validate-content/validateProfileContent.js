import { promisify } from '@/utils/promisify';

const ProfileSchema = z.object({
	// Add schema details here
});

export const validateProfileContent = async () => {
	console.log('==================================================');
	console.log('👉🏼 Fetching `content/profile.json` (STATIC)');

	const { success, data, error } = await promisify(
		import('@/content/profile.json').then((module) => module.default)
	);

	if (!success) {
		console.error(
			'❌ Error importing `content/profile.json` file:',
			error.message
		);
		return { data: null, error, success: false };
	}

	const {
		success: isValid,
		data: parsedData,
		error: validationError,
	} = ProfileSchema.safeParse(data);

	if (!isValid) {
		console.error(
			'❌ Data inside `content/profile.json` does not match `ProfileSchema`',
			validationError.message
		);
		return {
			data: null,
			error: new Error(validationError.message),
			success: false,
		};
	}

	console.log(
		'✅ Data validation for `content/profile.json` passed successfully!'
	);
	console.log('==================================================');
	return { data: parsedData, error: null, success: true };
};
