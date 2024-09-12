import { validateAboutContent } from './validateAboutContent.js';
import { validateBlogContent } from './validateBlogContent.js';
// import { validateEducationContent } from './validateEducationContent';
// import { validateProfileContent } from './validateProfileContent';
// import { validateProjectsContent } from './validateProjectsContent';
// import { validateSocialsContent } from './validateSocialsContent';
// import { validateVideosContent } from './validateVideosContent';
// import { validateWorkContent } from './validateWorkContent';

export const validateAllContent = async () => {
	await Promise.all([
		validateAboutContent(),
		validateBlogContent(),
		// validateEducationContent(),
		// validateProfileContent(),
		// validateProjectsContent(),
		// validateSocialsContent(),
		// validateVideosContent(),
		// validateWorkContent(),
	]);
};

validateAllContent();
