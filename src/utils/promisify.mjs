export const promisify = async (promise) => {
	try {
		const data = await promise;
		return {
			success: true,
			data,
			error: null,
		};
	} catch (e) {
		return {
			success: false,
			data: null,
			error: e,
		};
	}
};
