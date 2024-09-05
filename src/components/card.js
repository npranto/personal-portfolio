import React from 'react';

export default function Card({ children, id = '', className = '', ...props }) {
	if (!id || typeof id !== 'string' || id.trim().length === 0) {
		throw new Error('Please pass an `id` props to <Card />');
	}

	return (
		<section id={id} className={`rounded-lg py-4 px-4 ${className}`} {...props}>
			{children}
		</section>
	);
}
