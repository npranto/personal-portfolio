import React, { Suspense, lazy } from 'react';
import CardHeading from './card-heading';
import Card from './card';
import videos from '../content/videos.json';

const LazyVideoIframe = lazy(() => import('./video-iframe'));

const Videos = () => {
	return (
		<Card id="videos" className="bg-orange-100 videos card" data-e2e="videos">
			<CardHeading>Videos</CardHeading>
			<ul className="videos-list grid lg:grid-cols-2 gap-4 lg:grid-flow-row lg:items-stretch">
				{videos.videos.map((video, index) => (
					<li
						key={index}
						className={`blog-item bg-gray-100 hover:bg-white drop-shadow-lg hover:drop-shadow-2xl transition ease-in-out duration-500 rounded-md`}
					>
						<Suspense fallback={<div>Loading...</div>}>
							<LazyVideoIframe src={video.src} title={video.title} />
						</Suspense>
					</li>
				))}
			</ul>
		</Card>
	);
};

export default Videos;
