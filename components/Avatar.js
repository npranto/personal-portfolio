export default function Avatar({ size = 'lg', className = '' }) {
	if (size === 'sm') {
		return (
			<div className={`profile-picture ${className}`}>
				<picture>
					<source
						srcSet="/assets/images/profile-v3-112.png?as=webp&width=112"
						type="image/webp"
					/>
					<img
						src="/assets/images/profile-v3-112.png?width=160"
						alt="Profile Avatar"
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
				<source
					srcSet="/assets/images/profile-v3-160.png?as=webp&width=160"
					type="image/webp"
				/>
				<img
					src="/assets/images/profile-v3-160.png?width=160"
					alt="Profile Avatar"
					width="160px"
					height="auto"
				/>
			</picture>
		</div>
	);
}
