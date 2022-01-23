/* eslint-disable @next/next/no-img-element */
export default function Logo({ logo, alt = '' }) {
	if (typeof logo === 'string') {
		return (
			<div className="logo flex-shrink-0">
				<picture>
					<source srcSet={`${logo}?as=webp`} type="image/webp" />
					<img
						width="48px"
						height="auto"
						className="object-cover rounded-md"
						src={logo}
						alt={alt}
					/>
				</picture>
			</div>
		);
	}

	const { sm, lg } = logo;
	return (
		<div className="logo flex-shrink-0">
			<picture>
				<source
					srcSet={`${sm}?as=webp`}
					type="image/webp"
					media="(max-width: 768px)"
				/>
				<source srcSet={`${lg}?as=webp`} type="image/webp" />
				<source srcSet={`${lg}`} type="image/jpeg" />
				<img className="object-cover rounded-md" src={`${lg}`} alt={alt} />
			</picture>
		</div>
	);
}
