import React, { Suspense, lazy } from 'react';

const LazyVideoIframe = lazy(() => import('./video-iframe'));

const Videos = ({ videos }) => {
	return (
		<section
			id="videos"
			className="bg-orange-100 videos card"
			data-e2e="videos"
		>
			<h2 className="card-heading">Videos</h2>
			<ul className="videos-list grid h-auto lg:grid-cols-2 lg:grid-flow-row max-h-screen overflow-auto gap-4">
				{videos.map((video, index) => (
					<Suspense key={index} fallback={<div>Loading...</div>}>
						<LazyVideoIframe src={video.src} title={video.title} />
					</Suspense>
				))}
			</ul>
		</section>
	);
};

export default Videos;
