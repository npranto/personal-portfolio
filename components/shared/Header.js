export default function Header({ children, variant = 1, className = '' }) {
	if (variant === 1) {
		return (
			<h1
				className={`inline-block text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight ${className}`}
			>
				{children}
			</h1>
		);
	}
	if (variant === 2) {
		return (
			<h1
				className={`text-5xl md:text-6xl font-extrabold text-gray-300 tracking-tight ${className}`}
			>
				{children}
			</h1>
		);
	}
	if (variant === 3) {
		return (
			<h2
				className={`flex text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight ${className}`}
			>
				{children}
			</h2>
		);
	}
	if (variant === 4) {
		return <h3 className={`font-semibold ${className}`}>{children}</h3>;
	}
	if (variant === 5) {
		return (
			<h4 className={`text-base font-semibold ${className}`}>{children}</h4>
		);
	}
	if (variant === 6) {
		return <h4 className={`text-lg font-semibold ${className}`}>{children}</h4>;
	}
	if (variant === 7) {
		return (
			<h2
				className={`item flex text-2xl md:text-4xl font-extrabold tracking-tight mb-10 ${className}`}
			>
				{children}
			</h2>
		);
	}
	return (
		<h1
			className={`inline-block text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight ${className}`}
		>
			{children}
		</h1>
	);
}
