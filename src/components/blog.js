import React from 'react';
import CardHeading from './card-heading';
import Card from './card';
import posts from '../content/blog.json';

const Blog = () => {
	return (
		<Card id="blog" className="bg-green-100 blog card" data-e2e="blog">
			<CardHeading>Blog</CardHeading>

			<ul className="blog-list grid lg:grid-cols-2 gap-4 lg:grid-flow-row lg:items-stretch">
				{posts.map((item) => (
					<li
						key={item.href}
						className={`blog-item bg-gray-100 hover:bg-white drop-shadow-lg hover:drop-shadow-2xl transition ease-in-out duration-500 rounded-md`}
					>
						<a
							href={item.href}
							target="_blank"
							rel="noopener noreferrer"
							className="text-indigo-600 hover:text-indigo-500"
						>
							<div className="cursor-pointer p-4">
								<div className="flex space-x-2">
									<div className="flex flex-col flex-grow top-level-details">
										<h4 className="text-lg font-semibold">{item.title}</h4>
										<p className="text-sm text-gray-500">
											Published on {item.publishedOn}
										</p>
									</div>
								</div>
							</div>
						</a>
					</li>
				))}
			</ul>
		</Card>
	);
};

export default Blog;
