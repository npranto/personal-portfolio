import React, { Suspense, lazy } from 'react';
import CardHeading from './card-heading';
import Card from './card';

const LazyVideoIframe = lazy(() => import('./video-iframe'));

const Videos = ({ videos }) => {
	return (
		<Card id="videos" className="bg-orange-100 videos card" data-e2e="videos">
			<CardHeading>Videos</CardHeading>
			<ul className="videos-list grid h-auto lg:grid-cols-2 lg:grid-flow-row max-h-screen overflow-auto gap-4">
				{videos.map((video, index) => (
					<Suspense key={index} fallback={<div>Loading...</div>}>
						<LazyVideoIframe src={video.src} title={video.title} />
					</Suspense>
				))}
			</ul>
		</Card>
	);
};

export default Videos;
