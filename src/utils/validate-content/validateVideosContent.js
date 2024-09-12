import { promisify } from '@/utils/promisify';

const VideosSchema = z.object({
	// Add schema details here
});

export const validateVideosContent = async () => {
	console.log('==================================================');
	console.log('👉🏼 Fetching `content/videos.json` (STATIC)');

	const { success, data, error } = await promisify(getVideosContent());

	if (!success) {
		console.error(
			'❌ Error importing `content/videos.json` file:',
			error.message
		);
		return { data: null, error, success: false };
	}

	const {
		success: isValid,
		data: parsedData,
		error: validationError,
	} = VideosSchema.safeParse(data);

	if (!isValid) {
		console.error(
			'❌ Data inside `content/videos.json` does not match `VideosSchema`',
			validationError.message
		);
		return {
			data: null,
			error: new Error(validationError.message),
			success: false,
		};
	}

	console.log(
		'✅ Data validation for `content/videos.json` passed successfully!'
	);
	console.log('==================================================');
	return { data: parsedData, error: null, success: true };
};
