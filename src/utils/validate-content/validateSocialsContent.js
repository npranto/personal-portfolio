import { promisify } from '@/utils/promisify';

const SocialsSchema = z.object({
	// Add schema details here
});

export const validateSocialsContent = async () => {
	console.log('==================================================');
	console.log('👉🏼 Fetching `content/socials.json` (STATIC)');

	const { success, data, error } = await promisify(getSocialsContent());

	if (!success) {
		console.error(
			'❌ Error importing `content/socials.json` file:',
			error.message
		);
		return { data: null, error, success: false };
	}

	const {
		success: isValid,
		data: parsedData,
		error: validationError,
	} = SocialsSchema.safeParse(data);

	if (!isValid) {
		console.error(
			'❌ Data inside `content/socials.json` does not match `SocialsSchema`',
			validationError.message
		);
		return {
			data: null,
			error: new Error(validationError.message),
			success: false,
		};
	}

	console.log(
		'✅ Data validation for `content/socials.json` passed successfully!'
	);
	console.log('==================================================');
	return { data: parsedData, error: null, success: true };
};
