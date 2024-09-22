import { promises as fs } from 'fs';
import chalk from 'chalk';
import { writeToFile } from '../writeToFile.mjs';

export const savePortfolioContent = async (content) => {
	console.log('👉🏼', chalk.bgWhite.black('Saving Content: [src/data.json]'));
	try {
		await fs.writeFile(
			'./src/data.json',
			JSON.stringify(content, null, 2),
			'utf8'
		);
		// await writeToFile('./src/data.json', JSON.stringify(content, null, 2));
		console.log(`✅ Status: ${chalk.green.bold('Passed')} 🎉`);
	} catch (error) {
		console.log(`❌ Status: ${chalk.red.bold('Failed')} 💥`);
		console.error(
			chalk.red.bold('❌ Failed to save content to file: [src/data.json]')
		);
		console.error(error);
		return;
	}
};
