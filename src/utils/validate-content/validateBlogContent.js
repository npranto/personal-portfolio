import { z } from 'zod';
import blog from '../../content/blog.json' assert { type: 'json' };

const BlogSchema = z.object({
	id: z.literal('content:blog'),
	posts: z.array(
		z.object({
			href: z.string().url(),
			title: z.string(),
			publishedOn: z.string(),
		})
	),
});

export const validateBlogContent = async () => {
	console.log('==================================================');
	console.log('👉🏼 Validating `content/blog.json` (STATIC)');

	const { success, data, error } = BlogSchema.safeParse(blog);

	if (!success) {
		console.error('❌ Content does NOT match `BlogSchema` 💥');
		console.error('Error Details:', error.format());

		return {
			data: null,
			error: error.format(),
			success: false,
		};
	}

	console.log('✅ Content matches `BlogSchema` successfully! 🎉');
	console.log('==================================================');
	return {
		data,
		error: null,
		success: true,
	};
};
