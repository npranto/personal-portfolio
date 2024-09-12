import { promisify } from '@/utils/promisify';

const WorkSchema = z.object({
	// Add schema details here
});

export const validateWorkContent = async () => {
	console.log('==================================================');
	console.log('👉🏼 Fetching `content/work.json` (STATIC)');

	const { success, data, error } = await promisify(getWorkContent());

	if (!success) {
		console.error(
			'❌ Error importing `content/work.json` file:',
			error.message
		);
		return { data: null, error, success: false };
	}

	const {
		success: isValid,
		data: parsedData,
		error: validationError,
	} = WorkSchema.safeParse(data);

	if (!isValid) {
		console.error(
			'❌ Data inside `content/work.json` does not match `WorkSchema`',
			validationError.message
		);
		return {
			data: null,
			error: new Error(validationError.message),
			success: false,
		};
	}

	console.log(
		'✅ Data validation for `content/work.json` passed successfully!'
	);
	console.log('==================================================');
	return { data: parsedData, error: null, success: true };
};
