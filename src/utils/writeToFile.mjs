// import { promises as fs } from 'fs';

// export const writeToFile = async (filePath, stringifiedContent) => {
// 	try {
// 		await fs.writeFile(filePath, stringifiedContent, 'utf8');
// 		console.log('File written successfully');
// 	} catch (error) {
// 		console.error(
// 			`Error writing to file [${absoluteFilePath}]: ${error.message}`
// 		);
// 	}
// };

import { writeFileSync } from 'fs';

export const writeToFile = (filePath = '', stringifiedContent = '') =>
	writeFileSync(`${filePath}`, stringifiedContent);
