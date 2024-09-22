import { promises as fs } from 'fs';

export const writeToFile = async (filePath, stringifiedContent) => {
	try {
		await fs.writeFile(filePath, stringifiedContent, 'utf8');
	} catch (error) {
		console.error(
			`Error writing to file [${absoluteFilePath}]: ${error.message}`
		);
	}
};
