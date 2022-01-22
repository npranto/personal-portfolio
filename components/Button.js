export default function Button({
	variant = 1,
	className = '',
	children,
	...props
}) {
	if (variant === 1) {
		return (
			<a
				className={`inline-flex items-center rounded-sm text-xs md:text-sm font-semibold whitespace-nowrap p-3 focus:outline-none focus:ring-2 bg-gray-700 text-white hover:bg-gray-800 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-400 transition ease-in-out duration-200
				hover:-translate-y-1 ${className}`}
				{...props}
			>
				{children}
			</a>
		);
	}
	if (variant === 2) {
		return (
			<button
				type="button"
				className="flex space-x-1 font-medium text-indigo-600 hover:text-indigo-500"
				{...props}
			>
				{children}
			</button>
		);
	}
	if (variant === 3) {
		return <a {...props}>{children}</a>;
	}
	if (variant === 4) {
		return (
			<button
				type="button"
				className={`inline-flex items-center rounded-sm text-xs md:text-sm font-semibold whitespace-nowrap p-3 focus:outline-none focus:ring-2 bg-gray-700 text-white hover:bg-gray-800 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-400 transition ease-in-out duration-200
				hover:-translate-y-1 ${className}`}
				{...props}
			>
				{children}
			</button>
		);
	}
	return (
		<a
			className={`inline-flex items-center rounded-sm text-xs md:text-sm font-semibold whitespace-nowrap p-3 focus:outline-none focus:ring-2 bg-gray-700 text-white hover:bg-gray-800 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-400 transition ease-in-out duration-200
				hover:-translate-y-1 ${className}`}
			{...props}
		>
			{children}
		</a>
	);
}
