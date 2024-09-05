import React from 'react';
import Image from 'next/image';

const ProfilePicture = ({ src, width, height, className = '' }) => {
	if (!src || typeof src !== 'string' || src.trim().length === 0) {
		throw new Error('Please provide a valid `src` prop to <ProfilePicture />');
	}

	if (typeof width !== 'number' || width <= 0) {
		throw new Error(
			'Please provide a valid `width` prop to <ProfilePicture />'
		);
	}

	if (typeof height !== 'number' || height <= 0) {
		throw new Error(
			'Please provide a valid `height` prop to <ProfilePicture />'
		);
	}

	return (
		<div
			className={`profile-picture bg-gray-200 rounded ${className}`}
			style={{ height: `${height}px`, width: `${width}px` }}
		>
			<picture className="">
				<source srcSet={`${src}?as=webp`} type="image/webp" />
				<Image
					src={`${src}?width=${width.toString()}&height=${height.toString()}`}
					alt="Profile Picture"
					width={width}
					height={height}
					className="rounded"
				/>
			</picture>
		</div>
	);
};

export default ProfilePicture;
