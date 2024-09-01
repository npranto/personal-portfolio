import React from 'react';

export default function CardHeading({ children, className = '' }) {
	return (
		<h2
			className={`flex text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight my-2 ${className}`}
		>
			{children}
		</h2>
	);
}
