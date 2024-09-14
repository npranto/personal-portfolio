import chalk from 'chalk';
import { validateAboutContent } from './validateAboutContent.mjs';
import { validateBlogContent } from './validateBlogContent.mjs';
import { validateEducationContent } from './validateEducationContent.mjs';
import { validateProfileContent } from './validateProfileContent.mjs';
import { validateProjectsContent } from './validateProjectsContent.mjs';
import { validateSocialsContent } from './validateSocialsContent.mjs';
import { validateVideosContent } from './validateVideosContent.mjs';
import { validateWorkContent } from './validateWorkContent.mjs';
import { gap } from '../gap.mjs';

/**
 * Checks all content for each section inside `content` folder and
 * ensures that all content is valid and has the correct format.
 * @returns {Promise<void>}
 */
export const validateAllContent = async () => {
	console.log(chalk.bgGreen.black('[START]: ALL Content Validation'));

	gap();

	await validateAboutContent();
	await validateBlogContent();
	await validateEducationContent();
	await validateProfileContent();
	await validateProjectsContent();
	await validateSocialsContent();
	await validateVideosContent();
	await validateWorkContent();

	gap();

	console.log(chalk.bgGreen.black('[END]: ALL Content Validation'));
};
