export default function Avatar({ size = 'lg', logo = '', className = '' }) {
	if (size === 'sm') {
		return (
			<div className={`profile-picture ${className}`}>
				<picture>
					<source srcSet={`${logo}?as=webp&width=112`} type="image/webp" />
					<img
						src={`${logo}?width=160`}
						alt="Avatar"
						width="112px"
						height="auto"
					/>
				</picture>
			</div>
		);
	}
	return (
		<div className={`profile-picture ${className}`}>
			<picture>
				<source srcSet={`${logo}?as=webp&width=160`} type="image/webp" />
				<img
					src={`${logo}?width=160`}
					alt="Avatar"
					width="160px"
					height="auto"
				/>
			</picture>
		</div>
	);
}
