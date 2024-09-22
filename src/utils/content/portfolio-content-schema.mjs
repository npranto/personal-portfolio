import { z } from 'zod';

const imageFilePathRegex =
	/^\/assets\/images\/[\w\-. /]+\.(jpeg|jpg|png|webp)$/i;

const ImageSchema = z.object({
	id: z
		.string()
		.min(1, '`id` is required and must be at least 1 character long'),
	sm: z
		.string()
		.regex(
			imageFilePathRegex,
			"`sm` image path must start with '/assets/images/' and have one of these extensions only (.jpeg | .jpg | .png | .webp)"
		),
	md: z
		.string()
		.regex(
			imageFilePathRegex,
			"`md` image path must start with '/assets/images/' and have one of these extensions only (.jpeg | .jpg | .png | .webp)"
		),
	lg: z
		.string()
		.regex(
			imageFilePathRegex,
			"`lg` image path must start with '/assets/images/' and have one of these extensions only (.jpeg | .jpg | .png | .webp)"
		),
});

const ParagraphSchema = z.object({
	body: z.string().min(1).max(1000),
});

const ContentSectionSchema = z.object({
	id: z
		.string()
		.min(1, '`id` is required and must be at least 1 character long'),
	header: z.string().optional(),
	paragraphs: z.array(ParagraphSchema),
});

const WorkItemSchema = z.object({
	id: z
		.string()
		.min(1, '`id` is required and must be at least 1 character long'),
	image: ImageSchema,
	position: z.string(),
	company: z.string(),
	location: z.string(),
	duration: z.string(),
	employmentType: z.string(),
	description: z.array(z.string()),
	technologies: z.array(z.string()),
	isCurrent: z.boolean(),
});

const ProjectItemSchema = z.object({
	id: z
		.string()
		.min(1, '`id` is required and must be at least 1 character long'),
	name: z.string(),
	duration: z.string(),
	image: ImageSchema,
	githubUrl: z.string().url(),
	demoUrl: z.string().url(),
	description: z.string(),
	technologies: z.array(z.string()),
});

const EducationItemSchema = z.object({
	id: z
		.string()
		.min(1, '`id` is required and must be at least 1 character long'),
	institution: z.string(),
	duration: z.string(),
	location: z.string(),
	description: z.string(),
});

const NavItemSchema = z.object({
	id: z
		.string()
		.min(1, '`id` is required and must be at least 1 character long'),
	text: z.string().min(1),
	href: z.string().min(1),
});

const BlogPostSchema = z.object({
	title: z.string().min(1),
	link: z.string().url(),
	uploadedTime: z.string().min(1),
});

const VideoSchema = z.object({
	title: z.string().min(1),
	link: z.string().url(),
	uploadedTime: z.string().min(1),
});

export const PortfolioSchema = z.object({
	config: z.object({
		theme: z.string(),
		showAbout: z.boolean(),
		showWork: z.boolean(),
		showProjects: z.boolean(),
		showBlog: z.boolean(),
		showVideos: z.boolean(),
		showEducation: z.boolean(),
		showContact: z.boolean(),
	}),
	content: z.object({
		about: z.object({
			id: z
				.string()
				.min(1, '`id` is required and must be at least 1 character long'),
			header: z.string().min(1).max(20),
			mainContent: z.array(ContentSectionSchema),
			secondaryContent: z.array(ContentSectionSchema),
		}),
		work: z.object({
			id: z
				.string()
				.min(1, '`id` is required and must be at least 1 character long'),
			header: z.string().min(1).max(20),
			items: z.array(WorkItemSchema),
		}),
		projects: z.object({
			id: z
				.string()
				.min(1, '`id` is required and must be at least 1 character long'),
			header: z.string().min(1).max(20),
			items: z.array(ProjectItemSchema),
		}),
		education: z.object({
			id: z
				.string()
				.min(1, '`id` is required and must be at least 1 character long'),
			header: z.string().min(1).max(20),
			items: z.array(EducationItemSchema),
		}),
		profile: z.object({
			id: z
				.string()
				.min(1, '`id` is required and must be at least 1 character long'),
			description: z.string(),
			title: z.string(),
			picture: ImageSchema,
			author: z.string(),
			currentRole: z.string(),
			location: z.string(),
			highlightedRoles: z.array(z.string()),
			resumeHref: z.string(),
			contactHref: z.string(),
			nickname: z.string(),
		}),
		nav: z.object({
			id: z
				.string()
				.min(1, '`id` is required and must be at least 1 character long'),
			links: z.array(NavItemSchema),
		}),
		socials: z.object({
			id: z
				.string()
				.min(1, '`id` is required and must be at least 1 character long'),
			github: z.string().url(),
			linkedin: z.string().url(),
			twitter: z.string().url(),
			devto: z.string().url(),
			medium: z.string().url(),
			youtube: z.string().url(),
		}),
		blog: z.object({
			id: z
				.string()
				.min(1, '`id` is required and must be at least 1 character long'),
			header: z.string().min(1).max(20),
			posts: z.array(BlogPostSchema),
		}),
		videos: z.object({
			id: z
				.string()
				.min(1, '`id` is required and must be at least 1 character long'),
			header: z.string().min(1).max(20),
			posts: z.array(VideoSchema),
		}),
	}),
});
