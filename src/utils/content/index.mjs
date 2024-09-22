import { fetchPortfolioContent } from './fetch-portfolio-content.mjs';
import { savePortfolioContent } from './save-portfolio-content.mjs';
import { validatePortfolioContent } from './validate-portfolio-content.mjs';

const fetchSaveValidateContent = async () => {
	const allContent = (await fetchPortfolioContent()) || {};
	await savePortfolioContent(allContent);
	await validatePortfolioContent();
};

fetchSaveValidateContent();
