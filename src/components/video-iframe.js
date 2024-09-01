import React from 'react';

function VideoIFrame({ src, title }) {
	return (
		<div
			className="embed-responsive embed-responsive-4by3 relative w-full overflow-hidden"
			style={{ paddingTop: '75%', borderRadius: '5px' }}
		>
			<iframe
				className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
				src={src}
				title={title}
				allowFullScreen
				data-gtm-yt-inspected-2340190_699="true"
			></iframe>
		</div>
	);
}

export default VideoIFrame;
