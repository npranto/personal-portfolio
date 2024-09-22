import chalk from 'chalk';
import { fromError } from 'zod-validation-error';
import { PortfolioSchema } from './portfolio-content-schema.mjs';

export const validatePortfolioContent = async () => {
	console.log('👉🏼', chalk.bgWhite.black('Validating Content: [src/data.json]'));

	try {
		const portfolioContentModule = await import('../../data.json', {
			assert: { type: 'json' },
		});
		const portfolioContent = portfolioContentModule.default;

		const { success, error } = PortfolioSchema.safeParse(portfolioContent);

		if (!success) {
			console.log(`❌ Status: ${chalk.red.bold('Failed')} 💥`);
			const validationError = fromError(error);
			if (validationError?.toString()?.length > 0) {
				console.error(
					chalk.dim(
						validationError
							.toString()
							.split('Validation error:')[1]
							.split(';')
							.map((error) => `- ${error.trim()}`)
							.join('\n')
					)
				);
			}
		} else {
			console.log(`✅ Status: ${chalk.green.bold('Passed')} 🎉`);
		}
	} catch (error) {
		console.log(`❌ Status: ${chalk.red.bold('Failed')} 💥`);
		console.error(
			chalk.red(`Error importing portfolio content: ${error.message}`)
		);
	}
};
